import React from "react";

import fireStation from "../images/contact/Feuerwehrmagazin.jpg"

function Home() {
    return (
        <div className="home">
            <div className="container" style={{ flexDirection: "column" , }}>
                <p class="m-5 text-center text-red">
                    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!<br/>
                    !!!  ES HANDELT SICH HIERBEI UM EINEN PROTOTYPEN UND NICHT UM EIN OFFIZIELLE ANGEBOT  !!!<br />
                    !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!<br />
                </p>
            </div>
            <div class="container">
                <div class="row align-items-center my-5">
                    <div class="col-lg-7">
                        <img class="img-fluid rounded mb-4 mb-lg-0" src={fireStation} alt="" />
                    </div>
                    <div class="col-lg-5">
                        <h1 class="font-weight-light">Herzlich Willkommen bei der Freiwilligen Feuerwehr Altenriet</h1>
                        <p>
                            Hier k&ouml;nnten irgendwelche Fancy-Dinge &uuml;ber die Feuerwehr stehen.<br />
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
