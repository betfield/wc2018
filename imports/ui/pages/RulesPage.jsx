import React, { Component } from 'react';

import PortalPage from './PortalPage';
import Rules from '../../components/rules/Rules';

export default class RulesPage extends Component {

    render() {
        return (
            <PortalPage title="Reeglid">
                <Rules/>
            </PortalPage>
        )
    }
}