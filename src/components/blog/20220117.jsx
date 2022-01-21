import React from "react";

import imgM20220117 from "../../images/blog/M20220117.jpg"
import "./styles.css";

function M20220117() {

    return (
        <div className="home">
            <div class="container">
                <div class="row align-items-center my-5">
                    <h1 className="mt-5">17.12.2022 Brand 3 Verschmorte Deckenlampe</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                    <img class="photo" src={imgM20220117} alt=""/>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text ever
                        since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default M20220117;
