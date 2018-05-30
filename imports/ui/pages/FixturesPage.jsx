import React, { Component } from 'react';

import PortalPage from './PortalPage';
import FixturesContainer from '../../components/fixtures/FixturesContainer';

export default class FixturesPage extends Component {

    render() {

        console.log(this.props.match.params.fixtureId);

        return (
            <PortalPage title="Tulemused">
                <FixturesContainer fixtureId={this.props.match.params.fixtureId}/>
            </PortalPage>
        )
    }
}
