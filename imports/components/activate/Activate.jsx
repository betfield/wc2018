import React, { Component } from 'react';

export default class Activate extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="hpanel">
                        <div className="panel-body login-panel">
                            <div className="col-md-4 text-center">
                                <div className="activate-image">
                                    <img src="images/mascot.jpg"/>    
                                </div>
                            </div>
                            <div className="col-md-6 text-left">
                                <div>
                                    Ennustuse aktiveerimiseks tuleb teha ülekanne järgnevate juhendite järgi:<br/>
                                    <br/>
                                    Osavõtutasu: <strong>€25</strong><br/>
                                    Saaja nimi: <strong>Mittetulundusühing FC Twister</strong><br/>
                                    a/a: <strong>EE282200221030434946</strong><br/>
                                    Selgitus: <strong>MM</strong><br/>
                                    Tähtaeg: <strong>13. juuni 2018 kl 23:59*</strong><br/>
                                    <br/>
                                    NB! Kui ülekanne tehakse kellegi teise kui saatja nimele, siis palun märgi see selgitusse juurde. Näide: <strong>MM, <i>mängija nimi</i></strong><br/>
                                    <br/>
                                    Osavõtutasust läheb <strong>€20</strong> ennustusmängu auhinnafondi ning <strong>€5</strong> korraldamisega seotud kulude katteks.<br/>
                                    Hiljemalt 24h peale osavõtutasu laekumist aktiveeritakse sinu ennustus ning osaled mängus.<br/>
                                    <br/>
                                    Kõigil aktiveeritud ennustusega mängijatel on võimalik liituda ka <u><a href="https://www.facebook.com/groups/377139606113852/" target="_blank">Facebooki grupiga</a></u>, 
                                    kus saab arutada nii ennustust puudutavate teemade üle kui ka lihtsalt teiste kaasmängijatega suhelda. 
                                    Kõik olulised teavitused saavad grupi seinale lisatud, seega soovituslik on end sinna kirja panna.<br/>
                                    <br/>
                                    *Kui sinu osavõtutasu ei ole tähtajaks laekunud, siis ennustus arvesse ei lähe ning hiljem laekunud tasud kantakse samale arvele tagasi.
                                    Soovitatav on seega arvestada oma toimetamised nii, et ülekanne ei jääks viimasele minutile! ;)
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         )
    }
}