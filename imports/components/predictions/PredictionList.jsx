import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import BootstrapTable from 'react-bootstrap-table-next';

import NumericInput from 'react-numeric-input';

export default class PredictionList extends Component {

    constructor(props) {
        super(props);

        this.state = {
            columnHeaders: this.getTableHeaders()
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.resizeTable);
    }

    componentWillUnmount() {
        window.removeEventListener("resize", this.resizeTable);
    }

    resizeTable = () => {

        console.log(this.getTableHeaders());
        this.setState({
            columnHeaders: this.getTableHeaders()
        });
    }

    getTableHeaders = () => {
        let columnHeaders = [];
        
        if ($(window).width() < 640) {
            columnHeaders = [ 
                {
                    text: '',
                    dataField: 'vs',
                    headerAlign: 'center',
                    formatter: this.vsFormatter
                }, 
                {
                    text: 'Tulemus',
                    dataField: 'result',
                    sort: false,
                    headerAlign: 'center',
                    formatter: this.resultFormatter
                }
            ];
        } else if ($(window).width() < 1024) {
            columnHeaders = [
                {
                    text: 'Aeg',
                    dataField: 'time',
                    sort: false,
                    headerAlign: 'center'
                }, 
                {
                    text: '',
                    dataField: 'vs',
                    headerAlign: 'center',
                    formatter: this.vsFormatter
                }, 
                {
                    text: 'Tulemus',
                    dataField: 'result',
                    sort: false,
                    headerAlign: 'center',
                    formatter: this.resultFormatter
                }
            ];
        } else if ($(window).width() < 1281) {
            columnHeaders = [
                {
                    text: 'Aeg',
                    dataField: 'time',
                    sort: false,
                    headerAlign: 'center'
                }, 
                {
                    text: '',
                    dataField: 'vs',
                    headerAlign: 'center',
                    formatter: this.vsFormatter
                }, 
                {
                    text: 'Grupp',
                    dataField: 'group',
                    sort: false,
                    headerAlign: 'center'
                }, 
                {
                    text: 'Voor',
                    dataField: 'round',
                    sort: false,
                    headerAlign: 'center'
                }, 
                {
                    text: 'Tulemus',
                    dataField: 'result',
                    sort: false,
                    headerAlign: 'center',
                    formatter: this.resultFormatter
                }
            ];
        } else {
            columnHeaders = [
                {
                    text: 'Aeg',
                    dataField: 'time',
                    sort: false,
                    headerAlign: 'center'
                }, 
                {
                    text: 'Kodu',
                    dataField: 'homeTeam',
                    headerAlign: 'center',
                    formatter: this.teamFormatter
                }, 
                {
                    text: '',
                    dataField: 'vs',
                    headerAlign: 'center',
                    formatter: this.vsFormatter
                }, 
                {
                    text: 'Võõrsil',
                    dataField: 'awayTeam',
                    headerAlign: 'center'
                }, 
                {
                    text: 'Grupp',
                    dataField: 'group',
                    sort: false,
                    headerAlign: 'center'
                }, 
                {
                    text: 'Voor',
                    dataField: 'round',
                    sort: false,
                    headerAlign: 'center'
                }, 
                {
                    text: 'Tulemus',
                    dataField: 'result',
                    sort: false,
                    headerAlign: 'center',
                    formatter: this.resultFormatter
                }
            ];
        }

        return columnHeaders;
    }

    getPredictionsData = (group, user) => {
        let filteredPredictions = [];

        if (this.props.fixturesReady && this.props.predictionsReady) {
            
            let i = 0;

            const fixtures = this.props.fixtures;
            const predictions = this.props.predictions;

            if (['I','II','III'].indexOf(group) > -1) {
                filteredPredictions = fixtures.filter(fixture => fixture.roundRoman === group);
            } else if (['A','B','C','D','E','F'].indexOf(group) > -1) {
                filteredPredictions = fixtures.filter(fixture => fixture.group === group);
            }

            //If not Adminstrator then attach user's prediction to the Fixture
            if (!Roles.userIsInRole(Meteor.user(),'Administraator')) {
                filteredPredictions.forEach(function(f) {
                
                    const obj = predictions.find(prediction => prediction.fixture._id === f._id);
                    if (obj && obj.fixture) {
                        filteredPredictions[i].prediction = { 
                            result: obj.fixture.result
                        };
                    } else {
                        Meteor.call("clientError", "Prediction object does not exist for fixture", f )
                        Bert.alert( "Ennustuse tulemusi ei leitud. Palun pöördu administraatori poole!", "danger" );
                        filteredPredictions[i].prediction = { 
                            result: {
                                home_goals: "N/A",
                                away_goals: "N/A"
                            }
                        };
                    }
    
                    i++;
                });                
            }
        }
        
        return filteredPredictions;
    }

    formatPredictionData = (data) => {
        let predictionsData = [];

        data.forEach((e) => {
            let prediction = {
                time: e.date + " " + e.time,
                vs: {
                    homeFlag: e.home_team.imgSrc,
                    awayFlag: e.away_team.imgSrc
                },
                homeTeam: e.home_team.name,
                awayTeam: e.away_team.name,
                group: e.group,
                round: e.roundRoman,
                locked: e.locked
            }

            //If administrator, use fixture object's result to set the actual match result
            if (Roles.userIsInRole(Meteor.user(),'Administraator')) {
                prediction.locked = false;
                prediction.result = {
                    id: e._id,
                    homeGoals: e.result.home_goals,
                    awayGoals: e.result.away_goals
                }
            //else, use the prediction instead to set the user's result
            } else {
                prediction.result = {
                    id: e._id,
                    homeGoals: e.prediction.result.home_goals,
                    awayGoals: e.prediction.result.away_goals
                }
            }

            predictionsData.push(prediction);
        })

        return predictionsData;
    }

    handleSubmit = (event) => {
        // Prevent default browser form submit
        event.preventDefault();
    
        // Get value from form element
        let scores = [].slice.call(event.target.getElementsByClassName("bf-table-score"));
        let userId = Meteor.userId();

        scores.forEach((score, i) => {
            let result = score.getElementsByTagName("input");

            if (result.length > 2) {
                
                let fixture = result[0].value;
                let homeScore = result[1].value;
                let awayScore = result[2].value;

                Meteor.call("clientLog", "Submitting predictions for user: " + userId + " with values: " + fixture + ", " + homeScore + ", " + awayScore);

                //TODO: Make function update all predictions at once
                Meteor.call( "updateUserPredictions", fixture, homeScore, awayScore, function( error, response ) {
                    if ( error ) {
                        const msg = "Ennustuste uuendamine ebaõnnestus!";
                        Bert.alert( msg, "danger" );
                        Meteor.call("clientError", msg, error )
                    } else {
                        Meteor.call("clientLog", "Submitting predictions for user: " + userId + " succeeded");
                    }
                });
            }
        });

        Bert.alert( "Ennustused uuendatud!", "success" );
    }

    vsFormatter = (cell, row) => {
        return (
            <span className="bf-table-vs">
                <img src={cell.homeFlag}/>
                <span> vs </span>
                <img src={cell.awayFlag}/>
            </span>
        );
    }

    resultFormatter = (cell, row) => {
        if (!row.locked) {
            return (
                <span className="bf-table-score">
                    <input id="fixture-id" type="hidden" value={cell.id}/>
                    <NumericInput id="home-score" min={0} max={99} value={cell.homeGoals} className="input-no-spinner" size={2}/>
                    <span> : </span>
                    <NumericInput id="away-score" min={0} max={99} value={cell.awayGoals} className="input-no-spinner" size={2}/>
                </span>
            );
        } else {
            return (
                <span className="bf-table-score">
                    {cell.homeGoals} : {cell.awayGoals}
                </span>
            );
        }
    }

    render() {

        return (
            <div className='bf-table'>
                <form id="predictions-form" onSubmit={this.handleSubmit}>
                    <BootstrapTable 
                        keyField='result.id' 
                        data={ this.formatPredictionData(this.getPredictionsData(this.props.groupSelected, this.props.currentUser)) } 
                        columns={ this.state.columnHeaders }
                        bordered={ true }
                        striped
                        hover
                        condensed
                    />
                    <div className='bf-right'>    
                        <button id="pred-submit" type="submit" className="btn btn-success bf-table-submit">Salvesta</button>
                    </div>
                </form>
            </div>
        )
    }

}