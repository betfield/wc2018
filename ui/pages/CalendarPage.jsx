import React, { Component } from 'react';

import PortalPage from './PortalPage';
import CalendarContainer from '../../imports/portal/calendar/CalendarContainer';

export default class CalendarPage extends Component {
    render() {
        return (
            <PortalPage>
                <CalendarContainer/>
            </PortalPage>
        )
    }
}
