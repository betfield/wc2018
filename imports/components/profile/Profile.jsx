import React, { Component } from 'react';

export default class Profile extends Component {

    render() {

        return (
            <div className='bf-table'>
                {Meteor.user()._id}
            </div>
        )
    }

}