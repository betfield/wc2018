import React, { Component } from 'react';

import Header from '../../imports/portal/common/header';
import Navigation from '../../imports/portal/common/navigation';
import Footer from '../../imports/portal/common/footer';

import RulesPage from '../pages/RulesPage';
import PredictionsPage from '../pages/PredictionsPage';
import CalendarPage from '../pages/CalendarPage';
import TablePage from '../pages/TablePage';

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

    _getContent = (content) => {
        switch (content) {
            case "rules":
                return <RulesPage/>;
                break;
            case "predictions":
                return <RulesPage/>;
                break;
            case "calendar":
                return <CalendarPage/>;
                break;
            case "table":
                return <TablePage/>;
                break;
            default:
                return <PredictionsPage/>;
                break;
        }
    }

    render() {
        return (
            <div id="portal">
                <Header/>
                <Navigation/>
                <div id="wrapper">
                    {this._getContent(this.props.content)}
                    <Footer/>
                </div>
            </div>
        )
    }
}