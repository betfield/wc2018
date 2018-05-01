import React, { Component } from 'react';

import PortalPage from './PortalPage';
import PredictionsView from '../../imports/portal/predictions/PredictionsView';

export default class PredictionsPage extends Component {
    render() {
        return (
            <PortalPage>
                <PredictionsView/>
            </PortalPage>
        )
    }
}