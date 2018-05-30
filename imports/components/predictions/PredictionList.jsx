import React, { Component } from 'react';
import ReactDOM from 'react-dom'

import BootstrapTable from 'react-bootstrap-table-next';

import NumericInput from 'react-numeric-input';

export default class PredictionList extends Component {

    getPredictionsData = (group) => {
        //let fixtures = Predictions.find({"fixture.group": Template.instance().pred.get("groupSelected")}).fetch();
        /*
        let fixtureSelected = Template.instance().data;
        
        if (fixtureSelected) {
            fixtures = Predictions.find({"fixture._id": fixtureSelected}).fetch();
        } else {
            fixtures = Predictions.find({"fixture.group": Template.instance().pred.get("groupSelected")}).fetch();
        }    
        */

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
                            homeGoals: "N/A",
                            awayGoals: "N/A"
                        }
                    };
                }

                //fixtures[i].fixture.status = Fixtures.findOne({"_id": f.fixture._id}).status;
                i++;
            });
        }
        
        return filteredPredictions;
    }

    /*
    getAdminData = () => {
        let fixtures;
        let fixtureSelected = Template.instance().data;
        
        if (fixtureSelected) {
            fixtures = Fixtures.find({"_id": fixtureSelected}).fetch();
        } else {
            fixtures = Fixtures.find({"group": Template.instance().pred.get("groupSelected")}).fetch();
        }    

        let i = 0;
        
        fixtures.forEach((f) => {
            
            fixtures[i].fixture = f;
            
            let homeTeamCode = String(f.fixture.home_team.code).toLowerCase();
            let awayTeamCode = String(f.fixture.away_team.code).toLowerCase();

            fixtures[i].fixture.home_team.imgSrc = Meteor.settings.public.FOLDER_FLAGS + homeTeamCode + ".png";
            fixtures[i].fixture.away_team.imgSrc = Meteor.settings.public.FOLDER_FLAGS + awayTeamCode + ".png";

            // TODO: This is an ugly hack to display correct time for the fixture. Needs fixing in the DB schema
            let tempDate = new Date(f.fixture.ts);
            fixtures[i].fixture.time = tempDate.getHours() + ":00";

            fixtures[i].fixture.status = "";

            i++;
        });

        return fixtures;
    }
    */

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
                result: {
                    id: e._id,
                    homeGoals: e.prediction.result.homeGoals,
                    awayGoals: e.prediction.result.awayGoals
                },
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
            
            let fixture = result[0].value;
            let homeScore = result[1].value;
            let awayScore = result[2].value;


            //TODO: Make function update all predictions at once
            Meteor.call( "updateUserPredictions", fixture, homeScore, awayScore, userId, function( error, response ) {
                if ( error ) {
                    Bert.alert( "Ennustuste uuendamine ebaõnnestus!", "danger" );
                }
            });
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
        return (
            <span className="bf-table-score">
                <input id="fixture-id" type="hidden" value={cell.id}/>
                <NumericInput id="home-score" min={0} max={99} value={cell.homeGoals} className="input-no-spinner" size={2}/>
                <span> : </span>
                <NumericInput id="away-score" min={0} max={99} value={cell.awayGoals} className="input-no-spinner" size={2}/>
            </span>
        );
    }

    render() {

        const columnHeaders = [
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
        ]

        return (
            <div className='bf-table'>
                <form id="predictions-form" onSubmit={this.handleSubmit}>
                    <BootstrapTable 
                        keyField='result.id' 
                        data={ this.formatPredictionData(this.getPredictionsData(this.props.groupSelected)) } 
                        columns={ columnHeaders }
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