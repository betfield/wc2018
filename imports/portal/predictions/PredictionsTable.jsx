import React, { Component } from 'react';

import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from 'react-bootstrap-table2-paginator';

export default class PredictionsTable extends Component {

	componentDidMount() {

	}

    render() {

        const options = {
            hidePageListOnlyOnePage: true
        }

        const columns = [{
            text: 'Aeg',
            dataField: 'time',
            sort: true,
            headerAlign: 'center'
          }, {
            text: 'Kodu',
            dataField: 'home_team',
            sort: true,
            headerAlign: 'center'
          }, {
            text: '',
            dataField: 'vs',
          }, {
            text: 'Võõrsil',
            dataField: 'away_team',
            sort: true,
            headerAlign: 'center'
          }, {
            text: 'Grupp',
            dataField: 'group',
            sort: true,
            headerAlign: 'center'
          }, {
            text: 'Voor',
            dataField: 'round',
            sort: true,
            headerAlign: 'center'
          }, {
            text: 'Tulemus',
            dataField: 'result',
            sort: true,
            headerAlign: 'center'
          }]
        
        const data = [
            {
                time: "20 juuni 19:26",
                home_team: "tiim",
                away_team: "tiim2",
                group: "A",
                round: "1",
                result: "2:4",
                id: "key1"
            },
            {
                time: "22 juuni 15:26",
                home_team: "tiim4",
                away_team: "tiim7",
                group: "B",
                round: "1",
                result: "7:4",
                id: "key2"
            },
        ]
       
        return (
            <div className='bf-table'>
                <BootstrapTable 
                    keyField='id' 
                    data={ data } 
                    columns={ columns } 
                    striped
                    hover
                    condensed
                    pagination={ paginationFactory(options) }
                />
            </div>
        )
    }
}

/*

Template.predictionsTable.onRendered(function(){
    // Initialize Predictions table
    $('#predictions').footable();
    
});

Template.predictionsTable.events({
    'submit #predictions-form' : function(event, template) {
        // Prevent default browser form submit
        event.preventDefault();
    
        // Get value from form element
        var scores = [].slice.call(event.target.getElementsByClassName("bf-table-score"));
        var userId = Meteor.userId();
        
        scores.forEach(function(score){
            var result = score.getElementsByTagName("input");
            
            var fixture = result[0].value;
            var homeScore = result[1].value;
            var awayScore = result[2].value;
            
            Meteor.call( "updateUserPredictions", fixture, homeScore, awayScore, userId, function( error, response ) {
                if ( error ) {
                    Bert.alert( "Ennustuste uuendamine ebaõnnestus!", "success" );
                } else {
                    Bert.alert( "Ennustused uuendatud!", "success" );
                }
            });
        });
    },
});



*/