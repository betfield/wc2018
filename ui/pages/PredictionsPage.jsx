import React, { Component } from 'react';

import PortalPage from './PortalPage';
import PredictionsContainer from '../../imports/portal/predictions/PredictionsContainer';

export default class PredictionsPage extends Component {
    render() {
        return (
            <PortalPage>
                <PredictionsContainer/>
            </PortalPage>
        )
    }
}