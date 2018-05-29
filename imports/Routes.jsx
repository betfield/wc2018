import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './ui/pages/LandingPage';
import PortalPage from './ui/pages/PortalPage';
import RulesPage from './ui/pages/RulesPage';
import PredictionsPage from './ui/pages/PredictionsPage';
import FixturesPage from './ui/pages/FixturesPage';
import CalendarPage from './ui/pages/CalendarPage';
import TablePage from './ui/pages/TablePage';
import LoginPage from './ui/pages/LoginPage';
import ActivatePage from './ui/pages/ActivatePage';
import UsersPage from './ui/pages/UsersPage';

import Splash from './components/loading/Splash';

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
                    <Route exact path="/fixtures" component={FixturesPage}/>
                    <Route exact path="/calendar" component={CalendarPage}/>
                    <Route exact path="/table" component={TablePage}/>
                    <Route exact path="/login" component={LoginPage}/>
                    <Route exact path="/logout" component={LogoutPage}/>
                    <Route exact path="/activate" component={ActivatePage}/>
                    <Route exact path="/users" component={UsersPage}/>
                </Switch>
            </Router>
        )
    }
}

export default App = () => (
    getRoutes()    
);
