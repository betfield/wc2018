import React, { Component } from 'react';

export default class Rules extends Component {

    render() {
        return (
            <section className="rules" id="rules">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <h2>Reeglid</h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-lg-offset-2">
                            <ul>
                                <li>
                                    Ennustatakse MM finaalturniiri iga mängu normaalaja täpset skoori.
                                </li>
                                <li>
                                    Ennustus on jagatud seitsmeks (7) vooruks, vastavalt sellele kui palju mänge peab üks meeskond läbima, et tulla maailmameistriks.
                                </li>
                                <li>
                                    Iga voor lukustub 1h enne antud vooru esimese mängu algust, st vooru ennustusi pole peale seda võimalik enam muuta.
                                </li>
                            </ul>
                        </div>
                        <div className="col-lg-4">
                            <ul>
                                <li>Täpse normaalaja skoori õigesti ennustamine annab kokku 5 punkti. Kui skoorile pihta ei saanud, siis mängu võitja õigesti ennustamine annab 2 punkti ning õige väravatevahe sellele lisaks 1 punkti juurde. Viigi õigesti ennustamine annab 3p.</li>
                                <li>
                                    Kokku on seega võimalik teenida maksimaalselt 64 x 5 = 320 punkti.
                                </li>
                                <li>
                                    Auhinnafond jaotatakse vastavalt üldisele paremusjärjestusele. Lisaks on võimalik võita ka eriauhindu üksikute voorude võitude eest.  
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <br/>
                        <div className="col-lg-8 col-lg-offset-2 text-center page-scroll">
                            <h3>Tekkis huvi?</h3>
                            <a href="/register" className="btn btn-lg btn-outline">
                                Registreeri end siin
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}