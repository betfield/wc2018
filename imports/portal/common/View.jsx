import React, { Component } from 'react';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class View extends Component {

    render() {
        return (
            <div className="animate-panel" >
                <div className="content">
                    <div className="row">
                        <ReactCSSTransitionGroup transitionName="slide-up" transitionEnterTimeout={500} transitionAppearTimeout={500} transitionLeaveTimeout={500} transitionAppear={true}>
                            <div className="col-lg-12">
                                <div className="hpanel">
                                    <div className="panel-body">
                                        <div className="bf-table">
                                            <div id="selector" className="fc fc-ltr fc-unthemed bf-table-selector">
                                                <div className="fc-toolbar">
                                                    <div className="fc-left">
                                                        <h1>{this.props.title}</h1>
                                                    </div>   
                                                </div>
                                            </div>
                                        </div>
                        
                                        {this.props.children}                    

                                    </div>
                                </div>
                            </div>
                        </ReactCSSTransitionGroup>
                    </div>
                </div>
            </div>
         )
    }
}