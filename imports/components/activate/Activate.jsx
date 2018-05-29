import React, { Component } from 'react';

export default class Activate extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="hpanel">
                        <div className="panel-body login-panel">
                            <div className="col-md-4 text-center">
                                <img src="images/mascot.jpg"/>    
                            </div>
                            <div className="col-md-6 text-left">
                                <h4>Ennustuse aktiveerimiseks tee ülekanne:</h4>
                                <p>
                                    Osavõtutasu: <strong>€25</strong><br/>
                                    Saaja nimi: <strong>Mittetulundusühing FC Twister</strong><br/>
                                    a/a: <strong>EE282200221030434946</strong><br/>
                                    Tähtaeg: <strong>13. juuni 2018 kl 23:59</strong><br/>
                                    <br/>
                                    Osavõtutasust läheb <strong>€20</strong> ennustusmängu auhinnafondi ning <strong>€5</strong> korraldamisega seotud kulude katteks.<br/>
                                    Hiljemalt 24h peale osavõtutasu laekumist aktiveeritakse sinu ennustus ning osaled mängus. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         )
    }
}