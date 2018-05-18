import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import View from '../common/View';
import Calendar from './Calendar';

import Splash from '../../loading/Splash';

export default class CalendarView extends Component {

    render() {
        return (
            <View title="Kalender" ready={this.props.ready}>    
                <Calendar fixtures={this.props.fixtures} />
            </View>
        )
    }
}