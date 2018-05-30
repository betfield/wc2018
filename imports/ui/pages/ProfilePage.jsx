import React, { Component } from 'react';

import PortalPage from './PortalPage';
import ProfileContainer from '../../components/profile/ProfileContainer';

export default class ProfilePage extends Component {

    componentWillMount() {

        //Check if user is logged in
        if (!Meteor.userId()) {
            Bert.alert( 'Profiili vaatamiseks pead sisse logima', 'danger' );
            this.props.history.push('/login');
        }
        //If user  exist then proceed with the normal login flow
    }

    render() {
        return (
            <PortalPage title="Minu profiil">
                <ProfileContainer/>
            </PortalPage>
        )
    }
}
