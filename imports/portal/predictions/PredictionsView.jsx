import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import View from '../common/View';
import Predictions from './Predictions';

export default class PredictionsView extends Component {

    render() {

        return (
            <View ready={this.props.ready} title="Ennustused" filter="group">    
                <Predictions predictions={this.props.predictions}/>
            </View>
        )
    }

}
