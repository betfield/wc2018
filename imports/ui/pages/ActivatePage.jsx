import React, { Component } from 'react';

import PortalPage from './PortalPage';
import Activate from '../../components/activate/Activate';

export default class ActivatePage extends Component {

    componentWillMount() {

        //Check if user is logged in
        if (!Meteor.userId()) {
            Bert.alert( 'Lehe vaatamiseks pead sisse logima', 'danger' );
            this.props.history.push('/login');
        }
        //If user  exist then proceed with the normal login flow
    }

    render() {
        return (
            <PortalPage title="Aktiveeri ennustus">
                <Activate/>
            </PortalPage>
        )
    }
}
