import React, { Component } from 'react';

import PortalPage from './PortalPage';
import FixturesContainer from '../../components/fixtures/FixturesContainer';

export default class FixturesPage extends Component {

    render() {

        return (
            <PortalPage title="Vooru tulemused">
                <FixturesContainer fixtureId={this.props.match.params.fixtureId}/>
            </PortalPage>
        )
    }
}
