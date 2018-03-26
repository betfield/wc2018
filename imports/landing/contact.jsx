import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Contact extends Component {
    handleSubmit(event) {
        event.preventDefault();
     
        const name = ReactDOM.findDOMNode(this.refs.name).value.trim();
        const message = ReactDOM.findDOMNode(this.refs.message).value.trim();

        Meteor.call('sendEmail',
                    name,
                    message,
                    function(err, data) {
                        if(err) {
                            Bert.alert( 'Ups! Sõnumi saatmine ebaõnnestus! Palun proovi uuesti!', 'danger', 'fixed-top', 'fa-frown-o' );
                        } else {
                            Bert.alert( 'Sõnum saadetud! Täname tagasiside eest.', 'success', 'fixed-top', 'fa-smile-o' );
                            $(".floating-label-form-group").removeClass("floating-label-form-group-with-value");
                        }
        });

        ReactDOM.findDOMNode(this.refs.name).value = '';
        ReactDOM.findDOMNode(this.refs.message).value = '';
    }

    render() {
        return (            
            <section id="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Võta meiega ühendust</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-8 col-lg-offset-2">
                            <form name="sentMessage" id="contactForm" noValidate onSubmit={this.handleSubmit.bind(this)}>
                                <div className="row control-group">
                                    <div className="form-group col-xs-12 floating-label-form-group controls">
                                        <label>Nimi</label>
                                        <input type="text" className="form-control" placeholder="Nimi" ref="name" required data-validation-required-message="Palun sisesta oma nimi."/>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <div className="row control-group">
                                    <div className="form-group col-xs-12 floating-label-form-group controls">
                                        <label>Sõnum</label>
                                        <textarea rows="5" className="form-control" placeholder="Sõnum" ref="message" required data-validation-required-message="Palun sisesta sõnum."></textarea>
                                        <p className="help-block text-danger"></p>
                                    </div>
                                </div>
                                <br/>
                                <div id="success"></div>
                                <div className="row">
                                    <div className="form-group col-xs-12">
                                        <button type="submit" className="btn btn-success btn-lg">Saada</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}