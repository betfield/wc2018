import React, { Component } from 'react';

import LoginView from "../../imports/portal/login/LoginView";

export default class LoginPage extends Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <LoginView history={this.props.history}/>
        )
    }
}