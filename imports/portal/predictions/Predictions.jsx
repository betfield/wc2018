import React, { Component } from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

import PredictionsFooter from './PredictionsFooter';

import decimalToRoman from '../../helpers/roman';

import NumericInput from 'react-numeric-input';

export default class Predictions extends Component {

	componentDidMount() {

    }
    
    _getPredictionsData = () => {
        //let fixtures = Predictions.find({"fixture.group": Template.instance().pred.get("groupSelected")}).fetch();
        /*
        let fixtureSelected = Template.instance().data;
        
        if (fixtureSelected) {
            fixtures = Predictions.find({"fixture._id": fixtureSelected}).fetch();
        } else {
            fixtures = Predictions.find({"fixture.group": Template.instance().pred.get("groupSelected")}).fetch();
        }    
        */
        
        let predictions = this.props.predictions;
        let i = 0;
        
        predictions.forEach(function(f) {
            
            let homeTeamCode = String(f.fixture.home_team.code).toLowerCase();
            let awayTeamCode = String(f.fixture.away_team.code).toLowerCase();

            predictions[i].fixture.home_team.imgSrc = Meteor.settings.public.FOLDER_FLAGS + homeTeamCode + ".png";
            predictions[i].fixture.away_team.imgSrc = Meteor.settings.public.FOLDER_FLAGS + awayTeamCode + ".png";
            
            // Convert round to Roman number
            predictions[i].fixture.round = decimalToRoman(f.fixture.round);

            //fixtures[i].fixture.status = Fixtures.findOne({"_id": f.fixture._id}).status;
            i++;
        });
        
        return predictions;
    }

    /*
    _getAdminData = () => {
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
                time: e.fixture.date + " " + e.fixture.time,
                vs: {
                    homeFlag: e.fixture.home_team.imgSrc,
                    awayFlag: e.fixture.away_team.imgSrc
                },
                homeTeam: e.fixture.home_team.name,
                awayTeam: e.fixture.away_team.name,
                group: e.fixture.group,
                result: {
                    id: e.fixture._id,
                    homeGoals: e.fixture.result.homeGoals,
                    awayGoals: e.fixture.result.awayGoals
                },
                id: e.fixture._id
            }

            predictionsData.push(prediction);
        })

        return predictionsData;
    }

    _submit = (e) => {
        // Prevent default browser form submit
        e.preventDefault();
    
        // Get value from form element
        let scores = [].slice.call(event.target.getElementsByClassName("bf-table-score"));
        let userId = Meteor.userId();
        
        scores.forEach(function(score){
            let result = score.getElementsByTagName("input");
            
            let fixture = result[0].value;
            let homeScore = result[1].value;
            let awayScore = result[2].value;
            
            Meteor.call( "updateUserPredictions", fixture, homeScore, awayScore, userId, function( error, response ) {
                if ( error ) {
                    Bert.alert( "Ennustuste uuendamine ebaõnnestus!", "success" );
                } else {
                    Bert.alert( "Ennustused uuendatud!", "success" );
                }
            });
        });
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

        const columns = [{
            text: 'Aeg',
            dataField: 'time',
            sort: true,
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
            sort: true,
            headerAlign: 'center'
          }, 
          /*
          {
            text: 'Voor',
            dataField: 'round',
            sort: true,
            headerAlign: 'center'
          }, 
          */
          {
            text: 'Tulemus',
            dataField: 'result',
            sort: true,
            headerAlign: 'center',
            formatter: this.resultFormatter
          }]

        return (
            <div className='bf-table'>
                <form id="predictions-form">
                    <BootstrapTable 
                        keyField='id' 
                        data={ this.formatPredictionData(this._getPredictionsData()) } 
                        columns={ columns }
                        bordered={ true }
                        striped
                        hover
                        condensed
                    />
                    <PredictionsFooter/>
                </form>
            </div>
        )
    }

}