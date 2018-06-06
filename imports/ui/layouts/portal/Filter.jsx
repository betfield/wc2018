import React, { Component } from 'react';

export default class Filter extends Component {

    groupSelect = (e) => {
        let id = e.target.id;

        this.props.selectGroup(id);
        $("[id='" + id + "']").addClass("fc-state-active").siblings().removeClass("fc-state-active");
    }

    render() {

        if (this.props.filter === "group") {
            return (
                <div className="group-select fc-button-group">
                    <button id="A" type="button" className="fc-button fc-state-default fc-corner-left fc-state-active" onClick={this.groupSelect}>A</button>
                    <button id="B" type="button" className="fc-button fc-state-default" onClick={this.groupSelect}>B</button>
                    <button id="C" type="button" className="fc-button fc-state-default" onClick={this.groupSelect}>C</button>
                    <button id="D" type="button" className="fc-button fc-state-default" onClick={this.groupSelect}>D</button>
                    <button id="E" type="button" className="fc-button fc-state-default" onClick={this.groupSelect}>E</button>
                    <button id="F" type="button" className="fc-button fc-state-default" onClick={this.groupSelect}>F</button>
                    <button id="G" type="button" className="fc-button fc-state-default" onClick={this.groupSelect}>G</button>
                    <button id="H" type="button" className="fc-button fc-state-default" onClick={this.groupSelect}>H</button>
                    <button id="I" type="button" className="fc-button fc-state-default" onClick={this.groupSelect}>I</button>
                    <button id="II" type="button" className="fc-button fc-state-default" onClick={this.groupSelect}>II</button>
                    <button id="III" type="button" className="fc-button fc-state-default fc-corner-right" onClick={this.groupSelect}>III</button>
                </div>
            )
        } else if (this.props.filter === "finals") {
            return (
                <div className="group-select fc-button-group">
                    <button id="Last 16" type="button" className="fc-button fc-state-default" onClick={this.groupSelect}>1/8</button>
                    <button id="QF" type="button" className="fc-button fc-state-default" onClick={this.groupSelect}>1/4</button>
                    <button id="SF" type="button" className="fc-button fc-state-default" onClick={this.groupSelect}>PF</button>
                    <button id="FI" type="button" className="fc-button fc-state-default fc-corner-right" onClick={this.groupSelect}>F</button>
                    <button id="ALL" type="button" className="fc-button fc-state-default fc-corner-right" onClick={this.groupSelect}>Kõik</button>
                </div>
            )
        } else {
            return null;
        }
        
    }
}
