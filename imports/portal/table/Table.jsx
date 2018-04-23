import React, { Component } from 'react';

import UserPointsTable from './UserPointsTable';

export default class Table extends Component {

    render() {
        return (
            <UserPointsTable/>
        )
    }
}

/*


                        {{#if isInRole 'administrator'}}
                            {{> Template.dynamic template="userTable" data=userData}}
                        {{/if}}

Template.table.helpers({
    userPointsData: function() {
        var points = Points.find({}).fetch();
        return orderByTotal(points, "position");
    },
    userData: function() {
        return Meteor.users.find({}).fetch();
    }
});

function orderByTotal(arr, position) {
    return arr.slice().sort(function (a, b) {
        return a[position] < b[position] ? -1 : 1;
    });
}

*/