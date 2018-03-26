import React, { Component } from 'react';

import Navigation from '../imports/landing/navigation';
import Header from '../imports/landing/header';
import HowToPlay from '../imports/landing/howToPlay';
import Rules from '../imports/landing/rules';
import Contact from '../imports/landing/contact';
import Footer from '../imports/landing/footer';
import Splash from '../imports/loading/splash';

export default class App extends Component {

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
                    
                    <div className="scroll-top page-scroll visible-xs visible-sm">
                        <a className="btn btn-primary" href="#page-top">
                            <i className="fa fa-chevron-up"></i>
                        </a>
                    </div>
                </div>
            )
        } else {
            return <Splash/>
        }
    }
}

App.propTypes = {
    ready: React.PropTypes.bool,
    users: React.PropTypes.number
};