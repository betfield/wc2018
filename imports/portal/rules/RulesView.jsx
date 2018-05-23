import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import View from '../common/View';
import Rules from './Rules';

export default class RulesView extends Component {

    render() {
        return (
            <View title="Reeglid">    
                <Rules/>
            </View>
        )
    }

}
