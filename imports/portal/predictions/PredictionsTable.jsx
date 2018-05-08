import React, { Component } from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export default class PredictionsTable extends Component {

	componentDidMount() {

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

    teamFormatter = (cell, row) => {
        return (
            <span className="bf-table-vs">
                <img src={cell.home_flag}/>
                <span> vs </span>
                <img src={cell.away_flag}/>
            </span>
        );
    }

    resultFormatter = (cell, row) => {
        return (
            <span className="bf-table-score">
                <input id="fixture-id" type="hidden" value={cell.id}/>
                <input id="home-score" maxLength="2" type="number" min="0" max="99" className="input-no-spinner" value={cell.home_goals}/>
                <span> : </span>
                <input id="away-score" maxLength="2" type="number" min="0" max="99" className="input-no-spinner" value={cell.away_goals}/>
            </span>
        );
    }
    
    formatPredictionData = (data) => {
        let predictionsData = [];

        data.forEach((e) => {
            let prediction = {
                time: e.date,
                vs: {
                    home_flag: e.fixture.home_team.imgSrc,
                    away_flag: e.fixture.away_team.imgSrc
                },
                home_team: e.fixture.home_team.name,
                away_team: e.fixture.away_team.name,
                group: e.fixture.group,
                result: {
                    id: e.fixture._id,
                    home_goals: e.fixture.result.homeGoals,
                    away_goals: e.fixture.result.awayGoals
                },
                id: e.fixture._id
            }

            predictionsData.push(prediction);
        })

        return predictionsData;
    }

    render() {

        //console.log(this.props.data);

        const options = {
            hidePageListOnlyOnePage: true
        }

        const columns = [{
            text: 'Aeg',
            dataField: 'time',
            sort: true,
            headerAlign: 'center'
          }, 
          {
            text: 'Kodu',
            dataField: 'home_team',
            headerAlign: 'center'
          }, 
          {
            text: '',
            dataField: 'vs',
            headerAlign: 'center',
            formatter: this.teamFormatter
          }, 
          {
            text: 'Võõrsil',
            dataField: 'away_team',
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
                <BootstrapTable 
                    keyField='id' 
                    data={ this.formatPredictionData(this.props.data) } 
                    columns={ columns }
                    bordered={ false } 
                    striped
                    hover
                    condensed
                    pagination={ paginationFactory(options) }
                />
            </div>
        )
    }
}