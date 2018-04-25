import React, { Component } from 'react';

export default class Filter extends Component {

	componentDidMount() {

	}

    render() {
        if (this.props.filter === "group") {
            return (
                <div className="fc-right">
                    <div className="group-select fc-button-group">
                        <button id="A" type="button" data-template="A" className="fc-button fc-state-default fc-corner-left fc-state-active">A</button>
                        <button id="B" type="button" data-template="B" className="fc-button fc-state-default">B</button>
                        <button id="C" type="button" data-template="C" className="fc-button fc-state-default">C</button>
                        <button id="D" type="button" data-template="D" className="fc-button fc-state-default">D</button>
                        <button id="E" type="button" data-template="E" className="fc-button fc-state-default">E</button>
                        <button id="F" type="button" data-template="F" className="fc-button fc-state-default">F</button>
                        <button id="ALL" type="button" data-template="ALL" className="fc-button fc-state-default fc-corner-right">Kõik</button>
                    </div>
                </div>
            )
        } else if (this.props.filter === "finals") {
            return (
                <div className="fc-right">
                    <div className="group-select fc-button-group">
                        <button id="Last 16" type="button" data-template="Last 16" className="fc-button fc-state-default">1/8</button>
                        <button id="QF" type="button" data-template="QF" className="fc-button fc-state-default">1/4</button>
                        <button id="SF" type="button" data-template="SF" className="fc-button fc-state-default">PF</button>
                        <button id="FI" type="button" data-template="FI" className="fc-button fc-state-default fc-corner-right">F</button>
                        <button id="ALL" type="button" data-template="ALL" className="fc-button fc-state-default fc-corner-right">Kõik</button>
                    </div>
                </div>
            )
        } else {
            return null;
        }
        
    }
}
