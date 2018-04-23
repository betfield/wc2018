import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import View from '../common/View';
import Calendar from './Calendar';

import Splash from '../../loading/Splash';

export default class CalendarView extends Component {

    render() {
        if (this.props.ready) {
            return (
                <View title="Kalender">    
                    <Calendar/>
                </View>
            )
        } else {
            return <Splash/>
        }
    }

}

CalendarView.propTypes = {
    ready: React.PropTypes.bool
};