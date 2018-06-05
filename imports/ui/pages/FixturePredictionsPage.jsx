import React, { Component } from 'react';

import PortalPage from './PortalPage';
import FixturePredictionsContainer from '../../components/fixtures/FixturePredictionsContainer';

export default class FixturePredictionsPage extends Component {

    render() {

        return (
            <PortalPage title="Valitud mäng">
                <FixturePredictionsContainer fixtureId={this.props.match.params.fixtureId}/>
            </PortalPage>
        )
    }
}
