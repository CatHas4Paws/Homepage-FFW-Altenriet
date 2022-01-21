import React from "react";

function Imprint () {
    return (
        <div className="home">
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-5">
                        <h1>Impressum</h1>
                        <p>
                            Freiwillige Feuerwehr Altenriet<br/>
                            Kommandant Ralf K&ouml;nig<br />
                            Walddorferstr. 81<br />
                            72657 Altenriet<br />
                        </p>
                        <h2>F&uuml;r den Inhalt verantwortlich:</h2>
                        <p>
                            Freiwillige Feuerwehr Altenriet<br/>
                            Kommandant Ralf K&ouml;nig<br />
                            Kiefernweg 10<br />
                            72654 Neckartenzlingen<br />
                        </p>
                        <h2>Webadministration</h2>
                        <p>
                            Michael Stadelmaier<br/>
                            E-Mail: <a href={"mailto:admin@feuerwehr-altenriet.de"}>admin@feuerwehr-altenriet.de</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Imprint;