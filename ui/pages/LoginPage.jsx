import React, { Component } from 'react';

import PortalPage from './PortalPage';
import LoginView from '../../imports/portal/login/LoginView';

export default class LoginPage extends Component {
    
    componentWillMount() {

        //Check if user is logged in
        if (Meteor.userId()) {

            //If user logged in and logout parameter exists, proceed with user logout
            if (this.props.logout) {
                Meteor.logout(err => {
                    if (err) {
                        Bert.alert( 'Väljalogimine ebaõnnestus', 'danger' );
                        throw new Meteor.Error("Logout failed");
                    }
                });
                Bert.alert('Oled edukalt välja logitud', 'success');
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
            <PortalPage>
                <LoginView history={this.props.history}/>
            </PortalPage>
        )
    }
}