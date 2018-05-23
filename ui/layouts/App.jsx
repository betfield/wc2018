import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from '../pages/LandingPage';
import PortalPage from '../pages/PortalPage';
import RulesPage from '../pages/RulesPage';
import PredictionsPage from '../pages/PredictionsPage';
import CalendarPage from '../pages/CalendarPage';
import TablePage from '../pages/TablePage';
import LoginPage from '../pages/LoginPage';
import UsersPage from '../pages/UsersPage';

import Splash from '../../imports/loading/Splash';

const LogoutPage = (props) => {
    return (
      <LoginPage 
        logout={true}
        {...props}
      />
    );
}

getRoutes = () => {
    if (Meteor.settings.public.env === "Sandbox") {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/rules" component={RulesPage}/>
                </Switch>
            </Router>
        )
    } else {
        return (
            <Router>
                <Switch>
                    <Route exact path="/" component={LandingPage}/>
                    <Route exact path="/rules" component={RulesPage}/>
                    <Route exact path="/portal" component={PredictionsPage}/>
                    <Route exact path="/predictions" component={PredictionsPage}/>
                    <Route exact path="/calendar" component={CalendarPage}/>
                    <Route exact path="/table" component={TablePage}/>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/logout" component={LogoutPage}/>
                    <Route exact path="/users" component={UsersPage}/>
                </Switch>
            </Router>
        )
    }
}

export default App = () => (
    getRoutes()    
);
