import React, { Component } from 'react';

import HeaderContainer from '../portal/common/header/HeaderContainer';
import Footer from '../portal/common/Footer';
import Navigation from '../portal/common/navigation/Navigation';

import Splash from '../loading/Splash';

fixWrapperHeight = () => {
        
    // Get and set current height
    var headerH = 62;
    var navigationH = $("#navigation").height();
    var contentH = $(".content").height();

    // Set new height when content height is less then navigation
    if (contentH < navigationH) {
        $("#wrapper").css("min-height", navigationH + 'px');
    }

    // Set new height when content height is less then navigation and navigation is less then window
    if (contentH < navigationH && navigationH < $(window).height()) {
        $("#wrapper").css("min-height", $(window).height() - headerH  + 'px');
    }

    // Set new height when content is higher then navigation but less then window
    if (contentH > navigationH && contentH < $(window).height()) {
        $("#wrapper").css("min-height", $(window).height() - headerH + 'px');
    }
}

setBodySmall = () => {
    if ($(window).width() < 769) {
        $('body').addClass('page-small');
    } else {
        $('body').removeClass('page-small');
        $('body').removeClass('show-sidebar');
    }
}


export default class PortalPage extends Component {

    componentDidMount() {

        // Add special class to minimalize page elements when screen is less than 768px
        setBodySmall();
        // Wait until metisMenu, collapse effect finish and set wrapper height
        setTimeout(function () {
            fixWrapperHeight();
        }, 300);
    
        $(window).bind("resize click", function () {
    
            // Add special class to minimalize page elements when screen is less than 768px
            setBodySmall();
    
            // Wait until metisMenu, collapse effect finish and set wrapper height
            setTimeout(function () {
                fixWrapperHeight();
            }, 300);
        });
    
        // FIXED NAVBAR
        $('body').addClass('fixed-navbar');
    }

    getPortalLink() {
        if(Meteor.settings.public.env === "Sandbox") {
            return null
        } else if (this.props.ready) {
            return <Navigation currentUser={this.props.currentUser}/>
        } else {
            return <Splash/>
        }
    }

    render() {

        return (
            <div id="portal">
                <HeaderContainer/>
                {this.getPortalLink()}
                <div id="wrapper">
                    {this.props.children}                    
                    <Footer/>
                </div>
            </div>
        )
    }
}