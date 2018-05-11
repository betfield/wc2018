import React, { Component } from 'react';

export default class Filter extends Component {

    groupSelect = (e) => {
        let id = e.target.id;

        this.props.selectGroup(id)
        $("[id='" + id + "']").addClass("fc-state-active").siblings().removeClass("fc-state-active");
    }

    render() {

        if (this.props.filter === "group") {
            return (
                <div className="fc-right">
                    <div className="group-select fc-button-group">
                        <button id="A" type="button" data-template="A" className="fc-button fc-state-default fc-corner-left fc-state-active" onClick={this.groupSelect}>A</button>
                        <button id="B" type="button" data-template="B" className="fc-button fc-state-default" onClick={this.groupSelect}>B</button>
                        <button id="C" type="button" data-template="C" className="fc-button fc-state-default" onClick={this.groupSelect}>C</button>
                        <button id="D" type="button" data-template="D" className="fc-button fc-state-default" onClick={this.groupSelect}>D</button>
                        <button id="E" type="button" data-template="E" className="fc-button fc-state-default" onClick={this.groupSelect}>E</button>
                        <button id="F" type="button" data-template="F" className="fc-button fc-state-default" onClick={this.groupSelect}>F</button>
                        <button id="ALL" type="button" data-template="ALL" className="fc-button fc-state-default fc-corner-right" onClick={this.groupSelect}>Kõik</button>
                    </div>
                </div>
            )
        } else if (this.props.filter === "finals") {
            return (
                <div className="fc-right">
                    <div className="group-select fc-button-group">
                        <button id="Last 16" type="button" data-template="Last 16" className="fc-button fc-state-default" onClick={this.groupSelect}>1/8</button>
                        <button id="QF" type="button" data-template="QF" className="fc-button fc-state-default" onClick={this.groupSelect}>1/4</button>
                        <button id="SF" type="button" data-template="SF" className="fc-button fc-state-default" onClick={this.groupSelect}>PF</button>
                        <button id="FI" type="button" data-template="FI" className="fc-button fc-state-default fc-corner-right" onClick={this.groupSelect}>F</button>
                        <button id="ALL" type="button" data-template="ALL" className="fc-button fc-state-default fc-corner-right" onClick={this.groupSelect}>Kõik</button>
                    </div>
                </div>
            )
        } else {
            return null;
        }
        
    }
}
