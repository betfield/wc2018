import React, { Component } from 'react';

import PortalPage from './PortalPage';
import CalendarContainer from '../../components/calendar/CalendarContainer';

export default class CalendarPage extends Component {

    render() {
        return (
            <PortalPage title="Kalender">
                <CalendarContainer/>
            </PortalPage>
        )
    }
}
