import React, { Component } from 'react';

import User from './User';

export default class UserList extends Component {

    updateUserPointsHandler = (event) => {
        event.preventDefault();
        Meteor.call('updateAllUsersPredictionPoints', (error, result) => {
            if (error) {
                const msg = 'Kasutaja punktide uuendamine ebaõnnestus';

                Bert.alert( msg , 'danger' );
                Meteor.call("clientError", msg, error )
             } else {
                const msg = 'Kasutajate punktide uuendamine õnnestus';
                Bert.alert( msg, 'success' );
                Meteor.call("clientLog", msg )
             }
        });
    }

    render() {

        const users = this.props.users;
        const currentUser = Meteor.user();
        
        if (Roles.userIsInRole(currentUser,'Administraator')) {
            return (
                <table className="bf-table table table-striped table-hover table-bordered table-condensed">
                    <thead>
                        <tr>
                            <th>Pilt</th>
                            <th>Kasutaja</th>
                            <th>Meeskond</th>
                            <th>Roll</th>
                            <th>Aktiveeri</th>
                        </tr>
                    </thead>
                    <tbody>
                        { users.map((user) => {
                            return <User user={user} key={user._id}/>
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td>
                                <button type="submit" className="btn btn-success" onClick={this.updateUserPointsHandler}>Arvuta punktid</button>
                            </td>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tfoot>
                </table>
            )
        } else if (this.props.ready) {
            Bert.alert( 'Kasutajate vaatamiseks pead olema administraatori õigustega', 'danger' );
        }

        return null;
    }
}