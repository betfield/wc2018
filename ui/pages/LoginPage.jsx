import React, { Component } from 'react';

import PortalPage from './PortalPage';
import LoginView from '../../imports/portal/login/LoginView';

export default class LoginPage extends Component {
    render() {
        return (
            <PortalPage>
                <LoginView history={this.props.history}/>
            </PortalPage>
        )
    }
}