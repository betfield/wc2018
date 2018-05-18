import React, { Component } from 'react';

import PortalPage from './PortalPage';
import UsersContainer from '../../imports/portal/users/UsersContainer';

export default class UsersPage extends Component {

    componentWillMount() {
        //Check if user is logged in
        if (!Meteor.userId()) {
            Bert.alert( 'Kasutajate vaatamiseks pead sisse logima', 'danger' );
            this.props.history.push('/login');
        } 
    }

    render() {
        return (
            <PortalPage>
                <UsersContainer/>
            </PortalPage>
        )
    }
}