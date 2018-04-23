import React, { Component } from 'react';

import Navigation from '../../imports/landing/Navigation';
import Header from '../../imports/landing/Header';
import HowToPlay from '../../imports/landing/HowToPlay';
import Rules from '../../imports/landing/Rules';
import Contact from '../../imports/landing/Contact';
import Footer from '../../imports/landing/Footer';
import ScrollTop from '../../imports/landing/ScrollTop';

import Splash from '../../imports/loading/Splash';

export default class LandingPage extends Component {

    render() {

        if (this.props.ready) {
            return (
                <div id="landing">
                    <Navigation userCount = {this.props.users}/>
                    <Header/>
                    <HowToPlay/>
                    <Rules/>
                    <Contact/>
                    <Footer/>
                    <ScrollTop/>
                </div>
            )
        } else {
            return <Splash/>
        }
    }
}
