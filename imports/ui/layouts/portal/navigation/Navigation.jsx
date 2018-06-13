import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Splash from '../../../../components/loading/Splash';

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            date: new Date(),
            ticker: this.getTicker(),
            fixtureLink: this.getFixturesLink()
        };
    }

    componentDidMount() {
        // Initialize metsiMenu plugin to sidebar menu
        $('#side-menu').metisMenu();

        // Update ticker every minute
        this.interval = setInterval(() => this.setState({
            date: new Date(),
            ticker: this.getTicker()
        }), 60 * 1000);
    }

    componentWillUnmount() {
        // Stop updating the ticker
        clearInterval(this.interval);
    }

    getTicker = () => {
        if (Meteor.userId()) {
            Meteor.call('getFirstRoundFixtureDates', (error, result) => {
                if (error) {
                    Meteor.call("clientError", "Failed to get fixture dates for first matches of the rounds!", error);
                } else if (result) {
                    const firstRoundFixtureDates = result;
                    let currentDate = this.state.date;

                    //Allow setting a fake date for testing purposes
                    if (Meteor.settings.public.env === "Sandbox" && Meteor.settings.public.INVALID_TEST_TIME) {
                        currentDate = new Date(Meteor.settings.public.INVALID_TEST_TIME);
                    } 

                    let roundElem = {};

                    firstRoundFixtureDates.some(elem => {
                        roundElem = elem;
                        return currentDate.toISOString() < elem.ts
                    });

                    let roundDate = new Date(roundElem.ts);

                    let diff = roundDate.getTime() - currentDate.getTime();
                    let prevRoundElem = this.getPreviousRound(roundElem, firstRoundFixtureDates);
                    let prevDiff = 0;
                
                    if (prevRoundElem) {
                        prevRoundDate = new Date(prevRoundElem.ts);
                        prevDiff = currentDate.getTime() - prevRoundDate.getTime();
                    }

                    //Show ticker if there is less than 24h left until round end
                    if (diff > 0 && diff < (24*60*60*1000)) {
                        let url = "https://freesecure.timeanddate.com/countdown/i58fl2g4/cf11/cm0/cu4/ct1/cs0/ca0/co1/cr0/ss0/cac8d0808/cpcc0392b/pcfff/tcfff/fs100/szw256/szh108/tatVooru%20sulgemiseni%3A/tac966c6f/tpc966c6f/iso" + roundElem.ts;
                        this.setState({
                            ticker: <iframe src={url} frameBorder="0" width="136" height="32"/>
                        });
                    
                    //Show round closed during 1h after the deadline
                    } else if (prevDiff > 0 && prevDiff < (1*60*60*1000)) {
                        this.setState({
                            ticker: <span>{prevRoundElem.round}. voor suletud!</span>
                        });
                    //If last round then use current diff value
                    } else if (roundElem.round === firstRoundFixtureDates.length && Math.abs(diff) < (1*60*60*1000)) {
                        this.setState({
                            ticker: <span>{roundElem.round}. voor suletud!</span>
                        });
                    } else {
                        this.setState({
                            ticker: null
                        });
                    }
                }
            });
        }
    }

    getDropDownUserRole = (currentUser) => {
        const userRoleName = Roles.getRolesForUser(Meteor.userId());
        let className = "text-activate";

        if (Roles.userIsInRole(currentUser,'Aktiveeritud')) {
            className = "text-muted";
        } else if (Roles.userIsInRole(currentUser,'Administraator')) {
            className = "text-admin";
        } 

        return (
            <small className={className}>{userRoleName}<b className="caret"></b></small>
        )
    }

    getDropDownData = (currentUser) => {
        if (Roles.userIsInRole(currentUser,'Aktiveerimata')) {
            return (
                <li><Link to="/activate">Aktiveeri ennustus</Link></li>
            )
        } 
    }

    getLastPredictions = (currentUser) => {
        /*if (Roles.userIsInRole(currentUser,'Aktiveeritud')) {
            return (
                <div>
                    <h4 className="font-extra-bold m-b-xs">
                        <span className="color-blue">{currentUser.position}. koht</span> ({currentUser.total}p)
                    </h4>
                    <small className="text-muted">Sinu viimased ennustused</small>
                    <div id="sparkline1" className="small-chart m-t-sm"></div>
                </div>
            )       
        } */    
    }
                                
    getLoggedInUserData = (currentUser) => {
        if (currentUser !== undefined && currentUser !== null && currentUser.userProfile !== undefined) {

            return (
                <div className="profile-picture">
                    <Link to="/portal">
                        <img src={currentUser.userProfile.picture} 
                            alt={currentUser.userProfile.name} className="img-circle m-b"/>
                    </Link>

                    <div className="stats-label text-color">
                        <span className="font-extra-bold font-uppercase">{currentUser.userProfile.name}</span>
                        <div className="dropdown">
                            <Link className="dropdown-toggle" to="#" data-toggle="dropdown">
                                {this.getDropDownUserRole(currentUser)}
                            </Link>
                            <ul className="dropdown-menu animated flipInX m-t-xs">
                                <li><Link to="/portal">Pealeht</Link></li>
                                {this.getDropDownData(currentUser)}
                            <li className="divider"></li>
                                <li><Link to="/logout">Logi välja</Link></li>
                            </ul>
                        </div>
                    </div>

                    {this.getLastPredictions(currentUser)}

                </div>    
            )
        }
    }

    getActivateLink = (currentUser) => {

        if (currentUser !== undefined) {
            if (Roles.userIsInRole(currentUser,'Aktiveerimata')) {
                return (
                    <li className="text-activate"><Link to="/activate">Aktiveeri</Link></li>
                )
            } else if (Roles.userIsInRole(currentUser,'Administraator')) {
                return (
                    <li className="text-activate"><Link to="/users">Kasutajad</Link></li>
                )
            }
        }
    }

    getPreviousRound = (current, rounds) => {
        if (current.round > 1) {
            //Return array element with previous index
            //Need -2 as round itself starts with 1 and array index with 0
            return rounds[current.round - 2];
        } 
    }

    getFixturesLink = () => {
        Meteor.call("getActiveMatchday", (error, result) => {
            if (error) {
                Meteor.call("clientError", "Failed to get active matchday!", error);
            } else if (result && result.md > 1) {
                this.setState({
                    fixtureLink: <li className=""><Link to="/fixtures">Tulemused</Link></li>
                })
            }
        })
    }

    render() {
        return (
            <aside id="menu">
                <div id="navigation">
                    
                    { this.getLoggedInUserData(this.props.currentUser) }
                
                    <br/>
                    <div className="predictions-close-ticker">
                        {this.state.ticker}
                    </div>
                    <ul className="nav" id="side-menu">
                        <li className=""><Link to="/predictions">Ennustused</Link></li>
                        <li className=""><Link to="/table">Edetabel</Link></li>
                        <li className=""><Link to="/calendar">Kalender</Link></li>
                        {this.state.fixtureLink}
                        <li className=""><Link to="/rules">Reeglid</Link></li>
                        { this.getActivateLink(this.props.currentUser) }
                    </ul>
                </div>
            </aside>
        )
    }
}


/*

Template.navigation.onCreated(function() {
    var instance = this;
    instance.userPoints = new ReactiveVar();
    instance.pointsArray = new ReactiveVar();
    
    instance.autorun(function () {
        if(Meteor.userId()) {
            var subscription = instance.subscribe('userPoints', Meteor.userId());
        } 

        if (subscription && subscription.ready()) {
            instance.userPoints.set(Points.findOne({"user._id": Meteor.userId()}));

            var userFixturePointsCursor = Predictions.find({"userId": Meteor.userId()}, {fields: {"fixture.ts": 1, "fixture.userPoints": 1}});
            
            if (userFixturePointsCursor.count() > 0) {
                var userFixturePoints = userFixturePointsCursor.fetch();
                //console.log(userFixturePoints);
                instance.pointsArray.set(getLast15Points(userFixturePoints));

                //console.log(instance.pointsArray.get());

                // Sparkline bar chart data and options used under Profile image on navigation
                $("#sparkline1").sparkline(instance.pointsArray.get(), {
                    type: 'bar',
                    barWidth: 7,
                    height: '30px',
                    barColor: '#0190fe',
                    negBarColor: '#0173cb'
                });
            }
        }
    });
});

Template.navigation.events({

    // Colapse menu in mobile mode after click on element
    'click #side-menu a:not([href$="\\#"])': function(){
        if ($(window).width() < 769) {
            $("body").toggleClass("show-sidebar");
        }
    }

});

Template.navigation.helpers({
    userRoleName: function() {
        var userId = Meteor.userId();
        
        if (Roles.userIsInRole(userId, ['administrator'])) {
            return "Administraator";
        } else if (Roles.userIsInRole(userId, ['registered-user'])) {
            return "Aktiveeritud";
        } else {
            return "Mitteaktiivne";
        }

    },
    userPoints: function() {
        return Template.instance().userPoints.get();
    },
    getTicker: function() {
                    
    }
});

function getLast15Points(userFixturePoints) {
    // Sort array based on fixture TS
    userFixturePoints.sort(function(first,second) {
        var a = first.fixture.ts;
        var b = second.fixture.ts;

        if (a < b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }   
    });
    
    var currentDate = new Date();
    // adjust current date to -2h from now so it would only show after normal time end for current fixture
    // TODO: This should be changed based on fixture status
    currentDate.setTime(currentDate.getTime() - (2*60*60*1000)); 
    var userFixturePointsArray = [];
    var count = 0;

    // Remove fixtures not occurred yet and construct simple object array with only relevant data included
    userFixturePoints.forEach(function(element) {
        // Only add elements to array that have fixture TS earlier to now
        if (element.fixture.ts < currentDate.toISOString() && count < 15) {
            userFixturePointsArray.push(element.fixture.userPoints);
            count++;
        }
    });

    return userFixturePointsArray.reverse();
}
*/