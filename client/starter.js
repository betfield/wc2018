import { Meteor } from 'meteor/meteor';
import React from 'react';
import { render } from 'react-dom';
import AppContainer from '../client/react/AppContainer';

import { renderRoutes } from '../client/config/router';

Meteor.startup(() => {
    render(
        <AppContainer />,
        document.getElementById('app')
    );
});
