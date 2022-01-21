import React from "react";
import { Link } from "react-router-dom";

function Posts() {

    return (
        <div className="home">
            <div class="container">
                <Link to="/blog/Dummy-Bericht">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-7">
                            <img class="img-fluid rounded mb-4 mb-lg-0" src="http://placehold.it/900x400" alt="" />
                        </div>
                        <div class="col-lg-5">
                            <h1 class="font-weight-light">Das ist ein Dummy Bericht</h1>
                            <p>
                              Hier k&ouml;nnten die Einsatzberichte hochgeladen werden.
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/blog/M20220117">
                    <div class="row align-items-center my-5">
                        <div class="col-lg-7">
                            <img class="img-fluid rounded mb-4 mb-lg-0" src="http://placehold.it/900x400" alt="" />
                        </div>
                        <div class="col-lg-5">
                            <h1 class="font-weight-light">17.01.2020 Brand 3 Verschmorte Deckenlampe</h1>
                            <p>
                                Hier k&ouml;nnten die Einsatzberichte hochgeladen werden.
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </div>
    );
}

export default Posts;
