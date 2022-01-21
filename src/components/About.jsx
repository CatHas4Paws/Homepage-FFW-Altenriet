import React from "react";

import Grouppicture from "../images/about/Gruppe.jpg"
import LF from "../images/about/LF.jpg"
import MTW from "../images/about/MTW.jpg"
import Schlauchanhaenger from "../images/about/Schlauchanhaenger.jpeg"
import Anhaenger from "../images/about/Anhaenger.jpg"

function About() {
    return (
        <div className="about">
            <div class="container">
                <h1 className="text-center mt-5">&Uuml;ber Uns</h1>
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img class="img-fluid rounded mb-4 mb-lg-0" src={Grouppicture} alt="" />
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Die Freiwilligen</h1>
                        <p>
                            Das rechts k&ouml;nnte ein Bild von der gesamtes Gruppe sein.<br />
                            Dann k&ouml;nnte hier stehen wie viele Leute Aktiv sind.<br />
                            Wie viele in der Jugenfeuerwehr sind.<br />
                            Wie viele in der Altersabteilung.<br />
                            <br />
                            Es w&auml;re auch m&ouml;glich eine detailierte Auflistung (Tabelarisch) &uuml;ber alle Ausbildungen zu erstellen:<br />
                            Anzahl Aktive Mitglieder: XX<br />
                            Atemschutztr&auml;ger:    XX<br />
                            Machinist:                XX<br />
                            Gruppf&uuml;hrer:         XX<br />
                            etc.:                     XX<br />
                        </p>
                    </div>
                </div>
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img class="img-fluid rounded mb-4 mb-lg-0" src={LF} alt="" />
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">L&ouml;schfahrzeug</h1>
                        <p>
                            Hier k&ouml;nnte stehen welche Ausr&uuml;stung darauf ist.<br />
                            Stromaggregat: XX kw<br />
                            etc.: XXXXXX<br />
                            <br />
                            Hier k&ouml;nnte noch eine Tabelle mit den Eckdaten des Fahrzeugs sein.<br />
                            Leistung: XX<br />
                            Baujahr: XX<br />
                            Im Einsatz seit: XX<br />
                            Funkrufname: XX<br />
                            Gesamtgewicht: XX<br/>
                            etc.: XX<br />
                        </p>
                    </div>
                </div>
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img class="img-fluid rounded mb-4 mb-lg-0" src={MTW} alt="" />
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Mannschaftstransportwagen</h1>
                        <p>
                            Hier k&ouml;nnte stehen welche Ausr/uuml;stung darauf ist.<br />
                            Stromaggregat: XX kw<br />
                            etc.: XXXXXX<br />
                            <br />
                            Hier k&ouml;nnte noch eine Tabelle mit den Eckdaten des Fahrzeugs sein.<br />
                            Leistung: XX<br />
                            Baujahr: XX<br />
                            Im Einsatz seit: XX<br />
                            Funkrufname: XX<br />
                            Gesamtgewicht: XX<br />
                            etc.: XX<br />
                        </p>
                    </div>
                </div>
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img class="img-fluid rounded mb-4 mb-lg-0" src={Schlauchanhaenger} alt="" />
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Schlauchanh&auml;nger (LF)</h1>
                        <p>
                            Hier k&ouml;nnte stehen welche Ausr&uuml;stung darauf ist.<br />
                            Schlauchl&auml;nge: XX m<br />
                            etc.: XXXXXX<br />
                            <br />
                            Hier k&ouml;nnte noch eine Tabelle mit den Eckdaten des Fahrzeugs sein.<br />
                            Leistung: XX<br />
                            Baujahr: XX<br />
                            Im Einsatz seit: XX<br />
                            Funkrufname: XX<br />
                            Gesamtgewicht: XX<br />
                            etc.: XX<br />
                            Bild dient zur Demonstration. Quelle: <a href={"https://feuerwehr-rees.de/uber-uns/lz-bienen/anhanger-schlauch-material/"} target="_blank" rel="noopener noreferrer">Feuerwehr Rees</a>
                        </p>
                    </div>
                </div>
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img class="img-fluid rounded mb-4 mb-lg-0" src={Anhaenger} alt="" />
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Anh&auml;nger (MTW)</h1>
                        <p>
                            Hier k&ouml;nnte stehen welche Ausr&uuml;stung darauf ist.<br />
                            etc.: XXXXXX<br />
                            <br />
                            Hier k&ouml;nnte noch eine Tabelle mit den Eckdaten des Fahrzeugs sein.<br />
                            Leistung: XX<br />
                            Baujahr: XX<br />
                            Im Einsatz seit: XX<br />
                            Funkrufname: XX<br />
                            Gesamtgewicht: XX<br />
                            etc.: XX<br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
  );
}

export default About;
