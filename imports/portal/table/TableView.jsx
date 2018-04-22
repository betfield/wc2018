import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

import View from '../common/View';
import Table from './Table';

export default class TableView extends Component {

    render() {
        return (
            <View title="Edetabel">    
                <Table/>
            </View>
        )
    }

}
