import React, { Component } from 'react';

import Navigation from '../../imports/landing/navigation';
import Header from '../../imports/landing/header';
import HowToPlay from '../../imports/landing/howToPlay';
import Rules from '../../imports/landing/rules';
import Contact from '../../imports/landing/contact';
import Footer from '../../imports/landing/footer';
import ScrollTop from '../../imports/landing/scrollTop';

import Splash from '../../imports/loading/splash';

export default class LandingPage extends Component {

    render() {

        if (this.props.ready) {
            return (
                <div>
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

LandingPage.propTypes = {
    ready: React.PropTypes.bool,
    users: React.PropTypes.number
};