import React, { Component } from 'react';

import PortalPage from './PortalPage';
import Table from '../../components/table/Table';

export default class TablePage extends Component {

    componentWillMount() {

        //Check if user is logged in
        if (!Meteor.userId()) {
            Bert.alert( 'Tabeli vaatamiseks pead sisse logima', 'danger' );
            this.props.history.push('/login');
        }
        //If user  exist then proceed with the normal login flow
    }

    render() {
        return (
            <PortalPage title="Edetabel">
                <Table/>
            </PortalPage>
        )
    }
}
