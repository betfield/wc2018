import React, { Component } from 'react';

import PortalPage from './PortalPage';
import TableView from '../../imports/portal/table/TableView';

export default class TablePage extends Component {

    render() {
        return (
            <PortalPage>
                <TableView/>
            </PortalPage>
        )
    }
}
