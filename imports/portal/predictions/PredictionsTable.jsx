import React, { Component } from 'react';

export default class PredictionsTable extends Component {

	componentDidMount() {

	}

    render() {

        let position = round1 = round2 = round3 = round4 = round5 = round6 = round7 = total = 0;
        let fixture = {
            date: "20.06",
            time: "19:26",
            home_team: {
                name: "tiim",
                imgSrc: ""
            },
            away_team: {
                name: "tiim",
                imgSrc: ""
            },
            group: "A",
            round: "1",
            _id: "123",
            result: {
                homeGoals: "1",
                awayGoals: "2",
            },
            status: "NS"
        }
        return (
            <form id="predictions-form">  
                <table id="predictions" className="footable table table-stripped" data-page-size="100">
                    <thead>
                        <tr>
                            <th data-class="bf-table-date" data-hide= "phone, tablet" className="bf-center">Aeg</th>
                            <th data-class="bf-table-home" data-sort-ignore="true" data-hide="phone" className="bf-center">Kodu</th>
                            <th data-class="bf-table-vs" data-sort-ignore="true" className="bf-center"></th>
                            <th data-class="bf-table-away" data-sort-ignore="true" data-hide="phone" className="bf-center">Võõrsil</th>
                            <th data-class="bf-table-group" data-hide="phone, tablet" data-ignore="true" className="bf-center">Grupp</th>
                            <th data-class="bf-table-round" data-hide="phone, tablet" className="bf-center">Voor</th>
                            <th data-class="bf-table-score" data-sort-ignore="true" className="bf-center">Tulemus</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td align="middle">
                                <button id="pred-submit" type="submit" className="btn btn-success bf-table-submit">Salvesta</button>
                            </td>
                        </tr>
                    </tfoot>
                    <tbody id="pred-body">
                        <tr className="bf-table-row">
                            <td className="bf-table-date">{fixture.date} {fixture.time}</td>
                            <td className="bf-table-home">{fixture.home_team.name}</td>
                        
                            <td className="bf-table-vs">
                            <div id= "testcolumn">
                                <img src={fixture.home_team.imgSrc} />
                                <span> vs </span>
                                <img src={fixture.away_team.imgSrc} />
                            </div>
                            </td>
                            <td className="bf-table-away">{fixture.away_team.name}</td>
                            <td className="bf-table-group">{fixture.group}</td>
                            <td className="bf-table-group">{fixture.round}</td>
                            <td className="bf-table-score">
                                <div id= "testscore"> 
                                    <input id="fixture-id" type="hidden" value={fixture._id}/>
                                    <input id="home-score" maxlength="2" type="number" min="0" max="99" className="input-no-spinner" value={fixture.result.homeGoals} status={fixture.status}/>
                                    <span> : </span>
                                    <input id="away-score" maxlength="2" type="number" min="0" max="99" className="input-no-spinner" value={fixture.result.awayGoals} status={fixture.status}/>
                                </div>
                            </td>
                        </tr>
                    </tbody>	
                </table>
            </form>
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