import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import View from '../common/View';
import Rules from './Rules';

export default class RulesView extends Component {

    render() {
        return (
            <View title="Reeglid">    
                <Rules/>
                
                <div className="row">
                    <div className="col-md-12 text-center">
                        <button id="rules-login" type="submit" className="btn btn-success">Logi sisse ja alusta mängimist</button>
                    </div>
                </div>

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