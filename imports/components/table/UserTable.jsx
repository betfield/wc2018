import React, { Component } from 'react';

export default class UserTable extends Component {

    render() {
        return (
            <form id="user-form">    
                <select id="user-select">
                    {{#each this}}
                        <option value="{{_id}}">{{profile.name}}</option>
                    {{/each}}
                </select>
                <button id="user-activate-submit" type="submit" class="btn btn-success">Aktiveeri</button>
            </form>
        )
    }
}

/*

Template.userTable.events({
    'submit #user-form' : function(event, template) {
        // Prevent default browser form submit
        event.preventDefault();
    
        var value = $('#user-select :selected').val();
		Meteor.call("updateUserToRegistered", value);

        console.log("User " + value + " updated to registered");
    }
})

*/