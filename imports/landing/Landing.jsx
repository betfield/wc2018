import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import Navigation from './Navigation';
import Header from './Header';
import HowToPlay from './HowToPlay';
import Rules from './Rules';
import Contact from './Contact';
import Footer from './Footer';
import ScrollTop from './ScrollTop';

import Splash from '../loading/Splash';

export default class Landing extends Component {

    render() {

        if (this.props.ready) {
            Meteor.call("clientLog", "LandingPage props ready");

            return (
                <div id="landing">
                    <Navigation userCount = {this.props.usersCount}/>
                    <Header/>
                    <HowToPlay/>
                    <Rules/>
                    <Contact/>
                    <Footer/>
                    <ScrollTop/>
                </div>
            )
        } else {
            Meteor.call("clientLog", "LandingPage props loading..");
            return <Splash/>
        }
    }
}
