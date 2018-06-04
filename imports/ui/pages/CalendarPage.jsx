import React, { Component } from 'react';

import PortalPage from './PortalPage';
import CalendarContainer from '../../components/calendar/CalendarContainer';

export default class CalendarPage extends Component {

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
            <PortalPage title="Kalender">
                <CalendarContainer/>
            </PortalPage>
        )
    }
}
