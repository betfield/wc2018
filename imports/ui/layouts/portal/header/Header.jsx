import React, { Component } from 'react';

import { Link } from 'react-router-dom';

export default class Header extends Component {

    hideMenu = (e) => {
        e.preventDefault();

        if ($(window).width() < 769) {
            $("body").toggleClass("show-sidebar");
        } else {
            $("body").toggleClass("hide-sidebar");
        }
    }

    _getUserNavBar = () => {
        if (Meteor.userId()) {    
            return (
                <ul className="nav navbar-nav">
                    <li>
                        <Link className="" to="/">Pealeht</Link>
                    </li>
                    <li>
                        <Link className="" to="/logout">Logi välja</Link>
                    </li>
                </ul>
            )
        } else {
            <ul className="nav navbar-nav">
                <li>
                    <Link className="" to="/login">Logi sisse</Link>
                </li>
            </ul>
        }
    }

    render() {
        return (
            <div id="header">
                <Link to="/portal">
                    <div id="logo" className="light-version">
                    </div>
                </Link>
                <nav role="navigation">
                    <div className="header-link hide-menu" onClick={this.hideMenu}><i className="fa fa-bars"></i></div>
                    <div className="small-logo">
                        <span className="text-primary">MM 2018</span>
                    </div>
                    <div className="mobile-menu">
                        <button type="button" className="navbar-toggle mobile-menu-toggle" data-toggle="collapse" data-target="#mobile-collapse">
                            <i className="fa fa-chevron-down"></i>
                        </button>
                        <div className="collapse mobile-navbar" id="mobile-collapse">
                            {this._getUserNavBar()}
                        </div>
                    </div>
                    <div className="navbar-right">
                        <ul className="nav navbar-nav no-borders">
                            <li className="dropdown">
                                <Link to="/logout">
                                    <i className="pe-7s-upload pe-rotate-90"></i>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}