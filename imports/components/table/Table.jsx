import React, { Component } from 'react';

export default class UserPoints extends Component {

    render() {
        return (
            null
        )
    }
}

/*

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