import React, { Component } from 'react';

import BootstrapTable from 'react-bootstrap-table-next';

export default class PredictionsTable extends Component {

	componentDidMount() {

	}

    render() {

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
            sort: true,
            headerAlign: 'center'
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
                result: "2:4"
            },
            {
                time: "22 juuni 15:26",
                home_team: "tiim4",
                away_team: "tiim7",
                group: "B",
                round: "1",
                result: "7:4"
            },
        ]
       
        return (
            <BootstrapTable 
                keyField='id' 
                data={ data } 
                columns={ columns } 
                striped
                hover
                condensed
            />
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