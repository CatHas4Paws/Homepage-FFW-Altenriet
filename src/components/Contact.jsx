import React from "react";
import fireStation from "../images/contact/Feuerwehrmagazin.jpg"
import "./styles.css"

function Contact() {
    return (
        <div className="contact">
            <div class="container">
                <h1 className="text-center mt-5">Kontakt</h1>
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img class="img-fluid rounded mb-4 mb-lg-0" src={fireStation} alt="" />
                    </div>
                    <div class="col-lg-5">
                        <h2 class="font-weight-light">Notruf Feuerwehr</h2>
                        <p>
                            112
                        </p>
                        <h2 class="font-weight-light">Feuerwehrhaus</h2>
                        <p>
                            Walddorferstr. 81<br />
                            72657 Altenriet<br />
                            Tel.: 07127 22078<br />
                            Fax.: 07127 928345<br />
                        </p>
                        <p>
                            <strong>Achtung!</strong> Wir weisen ausdr&uuml;cklich darauf hin, dass das Feuerwehrhaus <strong>nicht</strong> st&auml;ndig besetzt ist!! Im <strong>Notfall</strong> w&auml;hlen Sie bitte <strong>unbedingt</strong> die <strong>Notrufnummer 112</strong>!
                        </p>
                        <h2 class="font-weight-light">Kommandant</h2>
                        <p>
                            Ralf K&ouml;nig<br/>
                            Kiefernweg 10<br />
                            72654 Neckartenzlingen<br />
                            Tel.: 07127 1453956<br />
                        </p>
                        <h2 class="font-weight-light">Stv. Kommandant</h2>
                        <p>
                            Fabian Sattler<br />
                            Uhlandstr. 1/1<br />
                            72657 Altenriet<br />
                            Tel.: 07127 237188<br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;
