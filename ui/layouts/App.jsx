import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPageContainer from '../../imports/landing/LandingPageContainer';
import PortalPage from '../pages/PortalPage';
import RulesPage from '../pages/RulesPage';

import Splash from '../../imports/loading/splash';

export default App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={LandingPageContainer}/>
            <Route exact path="/portal" component={PortalPage}/>
            <Route exact path="/rules" render={(props) => (
                <PortalPage {...props} content="rules" />
            )}/>
        </Switch>
    </Router>
);
