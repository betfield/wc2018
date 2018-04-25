import React, { Component } from 'react';

import PredictionsTable from './PredictionsTable';

export default class Predictions extends Component {

	componentDidMount() {

	}

    render() {
        return (
            <PredictionsTable data="predictionsData"/>
		)
	}
}

/*


Template.predictions.onCreated(function(){
    this.pred = new ReactiveDict();
    this.pred.set('groupSelected',"Last 16");
});

Template.predictions.events({
    'click .group-select > button' : function(event, template) {
        var id = event.target.id;
        var currentTab = $( event.target ).closest( "" );
        /*
        if (id === "ALL") {
            template.pred.set('groupSelected', {$in: ["A","B","C","D","E","F"]});
        } else {
            template.pred.set('groupSelected', id); 
        }
        */
  /*      
        template.pred.set('groupSelected', id);

        $("[id='" + id + "']").addClass("fc-state-active").siblings().removeClass("fc-state-active");
        Tracker.afterFlush(function() {
            return $('#predictions').trigger('footable_redraw');    
        })
    }
});

Template.predictions.helpers({
    predictionsData: function() {
        var fixtures;
        var fixtureSelected = Template.instance().data;
        
        if (fixtureSelected) {
            fixtures = Predictions.find({"fixture._id": fixtureSelected}).fetch();
        } else {
            fixtures = Predictions.find({"fixture.group": Template.instance().pred.get("groupSelected")}).fetch();
        }    
      
        var i = 0;
        
        fixtures.forEach(function(f) {
            
            var homeTeamCode = String(f.fixture.home_team.code).toLowerCase();
            var awayTeamCode = String(f.fixture.away_team.code).toLowerCase();

            fixtures[i].fixture.home_team.imgSrc = Meteor.settings.public.FOLDER_FLAGS + homeTeamCode + ".png";
            fixtures[i].fixture.away_team.imgSrc = Meteor.settings.public.FOLDER_FLAGS + awayTeamCode + ".png";
            
            // Convert round to Roman number
            // fixtures[i].fixture.round = decimalToRoman(f.fixture.round);
            
            // TODO: This is an ugly hack to display correct time for the fixture. Needs fixing in the DB schema
            var tempDate = new Date(f.fixture.ts);
            if (tempDate.getHours()) {
                fixtures[i].fixture.time = tempDate.getHours() + ":00";
            } else {
                var hours = parseInt(f.fixture.time.substring(0, 2)) + 3;
                fixtures[i].fixture.time = hours + ":00";
            }

            fixtures[i].fixture.status = Fixtures.findOne({"_id": f.fixture._id}).status;
            i++;
        });
        
        return fixtures;
    },
    
    adminData: function() {
        var fixtures;
        var fixtureSelected = Template.instance().data;
        
        if (fixtureSelected) {
            fixtures = Fixtures.find({"_id": fixtureSelected}).fetch();
        } else {
            fixtures = Fixtures.find({"group": Template.instance().pred.get("groupSelected")}).fetch();
        }    
      
        var i = 0;
        
        fixtures.forEach(function(f) {
            
            fixtures[i].fixture = f;
            
            var homeTeamCode = String(f.fixture.home_team.code).toLowerCase();
            var awayTeamCode = String(f.fixture.away_team.code).toLowerCase();

            fixtures[i].fixture.home_team.imgSrc = Meteor.settings.public.FOLDER_FLAGS + homeTeamCode + ".png";
            fixtures[i].fixture.away_team.imgSrc = Meteor.settings.public.FOLDER_FLAGS + awayTeamCode + ".png";

            // TODO: This is an ugly hack to display correct time for the fixture. Needs fixing in the DB schema
            var tempDate = new Date(f.fixture.ts);
            fixtures[i].fixture.time = tempDate.getHours() + ":00";

            fixtures[i].fixture.status = "";

            i++;
        });

        return fixtures;
    }
});

    
    
function decimalToRoman(value) { 
    var roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"]; 
    var decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1]; 
    
    if (value <= 0 || value >= 4000) return value; 
        var romanNumeral = ""; 
        for (var i=0; i<roman.length; i++) { 
        while (value >= decimal[i]) {  
            value -= decimal[i]; 
            romanNumeral += roman[i]; 
        } 
    } 
    return romanNumeral; 
}
*/