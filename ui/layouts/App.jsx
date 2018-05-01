import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import PortalPage from '../pages/PortalPage';
import RulesPage from '../pages/RulesPage';
import PredictionsPage from '../pages/PredictionsPage';
import CalendarPage from '../pages/CalendarPage';
import TablePage from '../pages/TablePage';
import LoginPage from '../pages/LoginPage';

import Splash from '../../imports/loading/Splash';

export default App = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={LandingPage}/>
            <Route exact path="/portal" component={PredictionsPage}/>
            <Route exact path="/rules" component={RulesPage}/>
            <Route exact path="/predictions" component={PredictionsPage}/>
            <Route exact path="/calendar" component={CalendarPage}/>
            <Route exact path="/table" component={TablePage}/>
            <Route exact path="/login" component={LoginPage}/>
        </Switch>
    </Router>
);
