import { Meteor } from 'meteor/meteor';
import React, { Component } from 'react';

import Navigation from './landing/Navigation';
import Header from './landing/Header';
import HowToPlay from './landing/HowToPlay';
import Rules from './landing/Rules';
import Contact from './landing/Contact';
import Footer from './landing/Footer';
import ScrollTop from './landing/ScrollTop';

import Splash from '../../components/loading/Splash';

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
