import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import View from '../common/View';
import Calendar from './Calendar';

export default class RulesView extends Component {

    render() {
        const transition = {
            appear: 'animate_animated',
            appearActive: 'animate_bounceInUp',
        };

        return (
            <View title="Kalender">    
                <Calendar/>
            </View>
        )
    }

}



/*
Template.rules.events({
    'click #rules-login' : function(event) {
        // Prevent default browser form submit
        event.preventDefault();
        Router.go('login');
    }
});
*/