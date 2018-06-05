import React, { Component } from 'react';

import PortalPage from './PortalPage';
import Login from '../../components/login/Login';

export default class LoginPage extends Component {
    
    componentWillMount() {

        //Check if user is logged in
        if (Meteor.userId()) {

            const id = Meteor.userId();

            //If user logged in and logout parameter exists, proceed with user logout
            if (this.props.logout) {
                Meteor.logout(err => {
                    if (err) {
                        const msg = 'Väljalogimine ebaõnnestus';
                        Bert.alert( msg , 'danger' );
                        Meteor.call("clientError", msg + ", user: " + id, err);
                    } else {
                        const msg = 'Oled edukalt välja logitud';
                        Bert.alert( msg , 'success' );
                        Meteor.call("clientLog", msg + ", user: " + id);
                        this.props.history.push('/login');
                    }
                });
            } 
            //If user exist but no logout parameter then redirect to main page
            else {
                this.props.history.push('/portal');
            }
        }

        //If user does not exist then proceed with the normal login flow
    }
    
    render() {
        return (
            <PortalPage title="Logi sisse">
                <Login history={this.props.history}/>
            </PortalPage>
        )
    }
}