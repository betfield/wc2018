import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import View from '../common/View';
import UserList from './UserList';

export default class UsersView extends Component {

    render() {
        return (
            <View title="Kasutajad" ready={this.props.ready}>    
                <UserList users={this.props.users}/>
            </View>
        )
    }

}
