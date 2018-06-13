import React, { Component } from 'react';

export default class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            registerEnd: false
        }
    }

    componentWillMount() {
        Meteor.call("isRegisterEnd", (error, result) => {
            if (error) {
                const msg = 'Registreerimise staatust ei olnud võimalik saada';
                Meteor.call("clientError", msg, error);
                Bert.alert( msg, 'danger' );
            } else {
                this.setState({
                    registerEnd: result
                });
            }
        });
    }

    submitButton = (user) => {
        console.log(this.state.registerEnd);

        if (Roles.userIsInRole(user,'Aktiveerimata')) {
            let title = "Aktiveeri";
            
            if (this.state.registerEnd) {
                title = "Kustuta";
            } 

            return <button id="user-activate-submit" type="submit" className="btn btn-success" onClick={this.submitHandler}>{title}</button>
        }
    }

    submitHandler = (event) => {
        // Prevent default browser form submit
        event.preventDefault();
        const value = this.props.user._id;

        if (this.state.registerEnd) {
            Meteor.call("updateUserToDeleted", value, (error, response) => {
                if (error) {
                    const msg = 'Kasutajat ' + this.props.user.userProfile.name + ' ei saanud kustutada!';
                    Meteor.call("clientError", msg, error);
                    Bert.alert( msg, 'danger' );
                } else {
                    const msg = 'Kasutaja ' + this.props.user.userProfile.name + ' kustutatud';
                    Meteor.call("clientLog", msg);
                    Bert.alert( msg, 'success' );
                }
            });
        } else {
            Meteor.call("updateUserToRegistered", value, (error, response) => {
                if (error) {
                    const msg = 'Kasutajat ' + this.props.user.userProfile.name + ' ei saanud aktiveerida!';
                    Meteor.call("clientError", msg, error);
                    Bert.alert( msg, 'danger' );
                } else {
                    const msg = 'Kasutaja ' + this.props.user.userProfile.name + ' aktiveeritud';
                    Meteor.call("clientLog", msg);
                    Bert.alert( msg, 'success' );
                }
            });
        }
    }

    render() {

        const user = this.props.user;

        return (
            <tr>
                <td><img src={user.userProfile && user.userProfile.picture}/></td>
                <td>{user.userProfile && user.userProfile.name}</td>
                <td>{user.userProfile && user.userProfile.team}</td>
                <td>{user.roles && user.roles[0]}</td>
                <td>{this.submitButton(user)}</td>
            </tr>
        )
    }
}