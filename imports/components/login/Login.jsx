import React, { Component } from 'react';

export default class Login extends Component {

    fbLogin = () => {

        const history = this.props.history;

        Meteor.loginWithFacebook({}, function(err){
            if (err) {
                Meteor.call("clientError", "Facebook login failed", err );
                throw new Meteor.Error("Facebook login failed");
            } else {
                Meteor.call("clientLog", "Facebook login succeeded for user: " + Meteor.userId());
                history.push('/portal');
            }
        });
    }

    gLogin = () => {

        const history = this.props.history;

        Meteor.loginWithGoogle({}, function(err){
            if (err) {
                Meteor.call("clientError", "Google login failed", err );
                throw new Meteor.Error("Google login failed");
            } else {
                Meteor.call("clientLog", "Google login succeeded for user:" + Meteor.userId());
                history.push('/portal');
            }
        });
    }

    twLogin = () => {

        const history = this.props.history;

        Meteor.loginWithTwitter({}, function(err){
            if (err) {
                Meteor.call("clientError", "Twitter login failed", err);
                throw new Meteor.Error("Twitter login failed");
            } else {
                Meteor.call("clientLog", "Twitter login succeeded for user: " + Meteor.userId());
                history.push('/portal');
            }
        });
    }
    

    render() {

        return (
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="hpanel">
                        <div className="panel-body login-panel">
                            <a><img id="fb-login" className="login" src="images/fb.png" onClick={this.fbLogin}/></a>
                            <a><img id="google-login" className="login" src="images/g+.png" onClick={this.gLogin}/></a>
                            <a><img id="tw-login" className="login" src="images/tw.png" onClick={this.twLogin}/></a>
                            <p>Kasuta ülal toodud linke ja logi sisse enda meelepärase kontoga. <br/>
                                NB! Kui kardad, et siinsele leheküljele sisenemine kajastub ka kuidagi sinu sotsiaalmeedia ruumis, siis ole mureta - mitte midagi me sinu eest postitama ega jagama ei hakka!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}