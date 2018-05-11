import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';

export default class PredictionsFooter extends Component {

    render() {
        return (
            <div className='bf-right'>    
                <button id="pred-submit" type="submit" className="btn btn-success bf-table-submit">Salvesta</button>
            </div>
        )
    }

}
