import React, { Component } from 'react';

import PortalPage from './PortalPage';
import PredictionsContainer from '../../imports/portal/predictions/PredictionsContainer';

export default class PredictionsPage extends Component {

    componentWillMount() {

        //Check if user is logged in
        if (!Meteor.userId()) {
            Bert.alert( 'Ennustuste vaatamiseks pead sisse logima', 'danger' );
            this.props.history.push('/login');
        } 
        //If user  exist then proceed with the normal login flow
    }

    render() {
        return (
            <PortalPage>
                <PredictionsContainer/>
            </PortalPage>
        )
    }
}