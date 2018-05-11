import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import View from '../common/View';
import Predictions from './Predictions';

export default class PredictionsView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            groupSelected: 'A'
        };
        
        this.selectGroup = this.selectGroup.bind(this);
    }

    selectGroup(group) {
        this.setState({ groupSelected: group });

        /*
        if (group === "ALL") {
            '$in: ["A","B","C","D","E","F"]'
        } else {
            group
        */
    }

    render() {
        console.log(this.state.groupSelected);        
        return (
            <View ready={this.props.ready} title="Ennustused" filter="group" selectGroup={this.selectGroup} groupSelected={this.state.groupSelected}>    
                <Predictions predictions={this.props.predictions} groupSelected={this.state.groupSelected}/>
            </View>
        )
    }

}
