import React, { Component } from 'react';

export default class Rules extends Component {

    render() {
        return (
            <div className="row">
                <div className="col-md-12 text-center">
                    <div className="hpanel">
                        <div className="panel-body login-panel">
                            <div className="col-md-4 text-left">
                                <h4>Millest alustada?</h4>
                                <br/>
                                <ul>
                                    <li>
                                        Esimese sammuna pead end süsteemi kasutajaks lisama, mis toimub automaatselt, kui logid sisse oma sotsiaalmeedia konto kaudu.
                                    </li>
                                    <li>
                                        Peale esimest sisselogimist registreeritakse sind mitteaktiivse kasutajana. See tähendab, et sul on ligipääs enamustele süsteemi osadele, kuid sinu ennustused mängus veel arvesse ei lähe.
                                    </li>
                                    <li>
                                        Et sinu ennustus arvesse läheks, tuleb sul oma kasutaja aktiveerida, kasutades vastavaid viiteid navigatsiooni ribalt. Kasutaja aktiveerimiseks tuleb tasuda osavõtutasu €20, mida saab teha jälgides juhiseid 'Aktiveeri ennustused' leheküljelt ning kasutades omale meelepärast maksevahendit. Toetatud on kõik suuremad krediitkaardid ning ka otsemaksed Paypali kontolt.
                                    </li>
                                    <li>
                                        Kui oled osavõtutasu ära maksnud, aktiveeritakse sinu kasutaja automaatselt ning osaled mängus. 
                                    </li>
                                </ul>
                                <br/>
                                <h4>Kes osaleda võivad?</h4>
                                <br/>
                                <ul>
                                    <li>
                                        Osaleda võib iga spordisõber, kellel eksisteerib kehtiv sotsiaalmeedia (Facebook, Google või Twitter) konto.
                                    </li>
                                    <li>
                                        Üks mängija võib omada mitut ennustust, st võid registreerida läbi kõigi enda nimel eksisteerivate kontode. Mida rohkem ennustusi sisestad, seda suuremad shansid on teoorias ka võita.  
                                    </li>
                                    <li>
                                        Ennustusmängu korraldajad kinnitavad, et ühegi kasutaja andmeid süsteemiväliselt ei levitada ega muul otstarbel ei kasutata.
                                    </li>
                                    <li>
                                        Iga kasutaja vastutab oma osaluse ja mängu pandava raha eest ise. Kui kardad, et osavõtumaksu tasumine tekitab sulle finantsilisi probleeme, siis parem ära mängi!
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="col-md-4 text-left">
                                <h4>Mida ennustatakse?</h4>
                                <br/>
                                <ul>
                                    <li>
                                        Ennustatakse turniiri iga mängu normaalaja skoori.
                                    </li>
                                    <li>
                                        Mäng on jagatud seitsmeks (7) vooruks, vastavalt sellele kui palju mänge peab üks meeskond mängima, et tulla Euroopa meistriks. Need voorud koosnevad järgmistest osadest:
                                        <ul>
                                            <li>I voor - iga meeskonna 1. alagrupimäng</li>
                                            <li>II voor - iga meeskonna 2. alagrupimäng</li>
                                            <li>III voor - iga meeskonna 3. alagrupimäng</li>
                                            <li>IV voor - kaheksandikfinaalid</li>
                                            <li>V voor - veerandfinaalid</li>
                                            <li>VI voor - poolfinaalid</li>
                                            <li>VII voor - finaal</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Iga voor lukustub 1h enne vooru esimese mängu algust, mis tähendab, et enne seda aega on võimalik veel antud vooru tulemusi muuta. Kui vooru lukustamise tähtaeg on kätte jõudnud, siis selle vooru tulemusi enam muuta pole võimalik ning kehtima jäävad need ennustused, mis on selleks ajaks kasutaja poolt sisestatud ja andmebaasi salvestatud.
                                    </li>
                                    <li>
                                        Vooru arvesse minemiseks peab olema eelnevalt kantud ka kasutaja aktiveerimistasu. See tähendab, kui kasutaja pole aktiveeritud 1h enne 1. vooru algust, siis selle vooru tulemused arvesse ei lähe. Kui sama kasutaja aktiveerib oma kasutaja peale 1. vooru algust, aga ennem 2. vooru lukustumist, siis tema ennustused alates 2. voorust lähevad arvesse. Sama loogika kehtib ka hilisemate aktiveerimistega, mis tähendab, et mänguga võib liituda igal ajal.
                                    </li>
                                    <li>
                                        Alagrupivoorude tulemusi on võimalik ette täita ka enne eelmise vooru lukustamist. Finaalide ennustuste sisestamine muutub võimalikuks peale vastava kohtumise meeskondade selgumist.
                                    </li>
                                    <li>
                                        Kokku osaleb ennustuses 51 mängu, st kõik turniiri kohtumised lähevad arvesse.
                                    </li>
                                    <li>
                                        Kui mõni mäng peaks minema lisaajale, siis lisaaja tulemused käesolevat ennustusmängu kuidagi ei mõjuta.
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="col-md-4 text-left">
                                <h4>Kuidas võitjad selgitatakse?</h4>
                                <br/>
                                <ul>
                                    <li>
                                        Iga ennustuse eest on võimalik punkte saada allolevate kriteeriumite järgi:
                                        <ul>
                                            <li>Täpse normaalaja skoori õigesti ennustamine annab kokku 5 punkti</li>
                                            <li>Õige normaalaja tulemuse (õige võitja või viik, kuid vale skoor) ennustamine annab 2 punkti. Sealjuures õige väravatevahe ennustamine (k.a. viik) annab lisaks juurde 1 punkti.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Kokku on seega võimalik teenida maksimaalselt 51 x 5 = 255 punkti.
                                    </li>
                                    <li>
                                        Mängu paremusjärjestus moodustatakse mängijate ennustuste pealt teenitud punktide kogusumma alusel (suurem summa tagab kõrgema koha).
                                    </li>
                                    <li>
                                        Kui juhtub, et mitmel kasutajal on sama punktide summa, siis otsustatakse järjestus allolevate reeglite järgi (ülevalt alla):
                                        <ul>
                                            <li>Suurem arv õigeid täpse skoori ennustusi.</li>
                                            <li>Suurem arv õige väravatevahega ennustusi.</li>
                                            <li>Suurem arv kogupunkte alagrupivoorudest.</li>
                                            <li>Loos</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Lisaks lõplikule paremusjärjestusele on võimalik saada ka "eripreemia" järgnevate voorude võitude eest: I, II, III ning (IV - VII summa). Lahti seletades tähendab see seda, et selgitame eraldi välja iga alagrupivooru ning ka finaalmängude parima ennustaja, kellest igaüks saab enda sisseostu tagasi (üks mängija võib saada ka mitu võitu). 
                                    </li>
                                    <li>
                                        Peale eripreemiate mahaarvestamist toimub ülejäänud auhinnafondi jagamine järgnevalt:
                                    </li>
                                    <br/>
                                    <ul>
                                        <table className="bf-rules-table">
                                            <tbody>
                                                <tr>
                                                    <th>Koht</th>
                                                    <th>Auhind</th>
                                                </tr>
                                                <tr>
                                                    <td>I</td>
                                                    <td>50%</td>
                                                </tr>
                                                <tr>
                                                    <td>II</td>
                                                    <td>25%</td>
                                                </tr>
                                                <tr>
                                                    <td>III</td>
                                                    <td>15%</td>
                                                </tr>
                                                <tr>
                                                    <td>IV</td>
                                                    <td>10%</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </ul>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
         )
    }
}