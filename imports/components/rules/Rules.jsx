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
                                        Et sinu ennustus arvesse läheks, tuleb sul oma kasutaja aktiveerida. Selle jaoks on vaja tasuda <strong>€25</strong> vastavalt juhistele, millele saad ligi peale sisselogimist, kasutades linki <strong>Aktiveeri</strong>.
                                    </li>
                                    <li>
                                        Osavõtutasust läheb <strong>€20</strong> ennustusmängu auhinnafondi ning <strong>€5</strong> korraldamisega seotud kulude katteks.
                                    </li>
                                    <li>
                                        Hiljemalt 24h peale osavõtutasu laekumist aktiveeritakse sinu ennustus ning osaled mängus. Ennustuse staatus on näidatud profiilinime all olevas tekstis. 
                                    </li>
                                </ul>
                                <br/>
                                <h4>Kes osaleda võivad?</h4>
                                <br/>
                                <ul>
                                    <li>
                                        Mängus saavad kaasa lüüa kõik jalgpallisõbrad, kellel vanust üle 21 eluaasta ning olemas kehtiv sotsiaalmeedia konto (Facebook, Google või Twitter).
                                    </li>
                                    <li>
                                        Üks mängija võib omada mitut ennustust, mis tähendab, et soovi korral võib registreerida läbi kõigi enda nimel eksisteerivate kontode. Iga ennustuse eest on vajalik tasuda eraldi osavõtutasu. 
                                    </li>
                                    <li>
                                        Ennustusmängu korraldajad kinnitavad, et ühegi kasutaja andmeid süsteemiväliselt ei levitata ega muul otstarbel ei kasutata. Täpsema info kohta, milliseid isikuga seotud andmeid süsteem kasutab, palume ühendust võtta emaili teel: info [at] fctwister . ee
                                    </li>
                                    <li>
                                        <strong>Iga mängija vastutab oma ennustusvõistluse osaluse eest ise. Kui sul vanust vähem kui 21 või tunned, et osavõtumaksu tasumine tekitab finantsilisi probleeme, siis ära mängi!</strong>
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
                                        Ennustusvõistlus on jagatud seitsmeks (7) vooruks, vastavalt sellele kui palju mänge peab üks meeskond mängima, et tulla maailmameistriks. Need voorud koosnevad järgmistest osadest:
                                        <ul>
                                            <li>I voor - iga meeskonna 1. alagrupimäng</li>
                                            <li>II voor - iga meeskonna 2. alagrupimäng</li>
                                            <li>III voor - iga meeskonna 3. alagrupimäng</li>
                                            <li>IV voor - kaheksandikfinaalid</li>
                                            <li>V voor - veerandfinaalid</li>
                                            <li>VI voor - poolfinaalid</li>
                                            <li>VII voor - finaal ja 3. koha mäng</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Iga voor lukustub 1h enne vooru esimese mängu algust, mis tähendab, et enne seda aega on võimalik veel antud vooru tulemusi muuta. Kui vooru lukustamise tähtaeg on kätte jõudnud, siis selle vooru tulemusi enam muuta pole võimalik ning kehtima jäävad need ennustused, mis on selleks ajaks kasutaja poolt sisestatud ja andmebaasi salvestatud.
                                    </li>
                                    <li>
                                        Vooru arvesse minemiseks peab olema eelnevalt kantud ka kasutaja aktiveerimistasu. See tähendab, kui kasutaja pole aktiveeritud 1h enne 1. vooru algust, siis selle vooru tulemused arvesse ei lähe. Kui sama kasutaja aktiveerib oma kasutaja peale 1. vooru algust, aga ennem 2. vooru lukustumist, siis tema ennustused alates 2. voorust lähevad arvesse. Sama loogika kehtib ka hilisemate aktiveerimistega, mis tähendab, et mänguga võib liituda igal ajal.
                                    </li>
                                    <li>
                                        Alagrupivoorude tulemusi on võimalik ette täita ka enne eelmise vooru lukustumist. Finaalide ennustuste sisestamine muutub võimalikuks peale vastavate kohtumiste meeskondade selgumist.
                                    </li>
                                    <li>
                                        Kokku koosneb ennustus 64 mängust, st kõik maailmameistrivõistluste finaalturniiri kohtumised lähevad arvesse.
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
                                            <li>Täpse normaalaja skoori õigesti ennustamine annab kokku <strong>5 punkti</strong>.</li>
                                            <li>Vale skoori kuid õige mängu võitja ennustamine annab <strong>2 punkti</strong>. Sealjuures õige väravatevahe ennustamine annab lisaks juurde <strong>1 punkti</strong>.</li>
                                            <li>Vale skoori kuid viigi õigesti ennustamine annab <strong>3 punkti</strong>.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        Kokku on seega võimalik teenida maksimaalselt 64 x 5 = 320 punkti.
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
                                        Lisaks lõplikule paremusjärjestusele on võimalik saada ka "eriauhind" järgnevate voorude võitude eest: I, II, III ning (IV - VII summa). Lahti seletades tähendab see, et selgitame välja 4 eriauhinda, üks iga alagrupivooru ning üks finaalmängude parima ennustaja jaoks, mille väärtuseks on ennustusmängu sisseostu summa. Üks mängija võib saada ka mitu eriauhinda. 
                                    </li>
                                    <li>
                                        Peale eriauhindade ja korralduskulude mahaarvestamist toimub ülejäänud auhinnafondi jagamine ennustusmängu paremate vahel vastavalt laialt levinud turniiripokkeri väljamakse skeemile, mille leiab <a href="http://www.wsop.com/how-to-play-poker/mtt-tournament-payouts/">siit</a>.
                                    </li>
                                    <li>
                                        Näide: 31-40 osaleja puhul jaguneks auhinnafond antud tabeli järgi järgmiselt: 
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
                                                    <td>40%</td>
                                                </tr>
                                                <tr>
                                                    <td>II</td>
                                                    <td>25%</td>
                                                </tr>
                                                <tr>
                                                    <td>III</td>
                                                    <td>20%</td>
                                                </tr>
                                                <tr>
                                                    <td>IV</td>
                                                    <td>15%</td>
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