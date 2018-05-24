import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import App from '../ui/layouts/App';

Meteor.startup(() => {

    window.onerror = function (msg, url, lineNo, columnNo, error) {
        Meteor.call("clientError", msg, { url, lineNo, columnNo, error } );
        return false;
    }

    render(
        <App/>,
        document.getElementById('app')
    );
});
