import React, { Component } from 'react';

import PortalPage from './PortalPage';
import RulesView from '../../imports/portal/rules/RulesView';

export default class RulesPage extends Component {

    render() {
        return (
            <PortalPage>
                <RulesView/>
            </PortalPage>
        )
    }
}