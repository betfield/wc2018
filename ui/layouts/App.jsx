import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPageContainer from '../../imports/landing/LandingPageContainer';
import PortalPage from '../pages/PortalPage';
import RulesPage from '../pages/RulesPage';
import PredictionsPage from '../pages/PredictionsPage';

import Splash from '../../imports/loading/Splash';

export default App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={LandingPageContainer}/>
            <Route exact path="/portal" component={PortalPage}/>
            <Route exact path="/rules" render={(props) => (
                <PortalPage {...props} content="rules" />
            )}/>
            <Route exact path="/predictions" render={(props) => (
                <PortalPage {...props} content="predictions" />
            )}/>
            <Route exact path="/calendar" render={(props) => (
                <PortalPage {...props} content="calendar" />
            )}/>
            <Route exact path="/table" render={(props) => (
                <PortalPage {...props} content="table" />
            )}/>
            <Route exact path="/login" render={(props) => (
                <PortalPage {...props} content="login" />
            )}/>
        </Switch>
    </Router>
);
