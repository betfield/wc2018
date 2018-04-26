import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import { logger } from "../client/js/helpers/logger";
import App from '../ui/layouts/App';

Meteor.startup(() => {

    //Define logger object
    Log = logger;
    
    render(
        <App/>,
        document.getElementById('app')
    );
});
