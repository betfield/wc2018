import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import View from '../common/View';
import Predictions from './Predictions';

export default class PredictionsView extends Component {

    render() {
        return (
            <View title="Ennustused" filter="group">    
                <Predictions/>
            </View>
        )
    }

}
