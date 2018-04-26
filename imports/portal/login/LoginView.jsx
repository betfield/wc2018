import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import View from '../common/View';
import Login from './Login';

export default class LoginView extends Component {

    render() {
        return (
            <View title="Logi sisse">    
                <Login history={this.props.history}/>
            </View>
        )
    }

}
