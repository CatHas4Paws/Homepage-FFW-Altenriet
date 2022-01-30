import React from "react";
import { Grid } from "@material-ui/core";
import { NavLink } from "react-router-dom";

import facebook from "../images/footer/f_logo_RGB-White_58.png"

function Footer() {
    return (
        <div className="footer">
          <footer class="py-5 bg-dark">
                <div class="container">
                    <Grid container style={{ flexDirection: "row", width: "100%"}}>
                        <Grid container style={{ textAlign: "left", flexDirection: "column", width: "15%" }}>
                            <p class="m-0 text-center text-white">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item">
                                        <NavLink className="nav-links" to="/Imprint">Impressum</NavLink></li>
                                    <li className="nav-item">
                                        <NavLink className="nav-links" to="/Disclaimer">Haftungsausschluss</NavLink></li>
                                    <li className="nav-item">
                                        <NavLink className="nav-links" to="/Privacy">Datenschutz</NavLink></li>
                                </ul>
                            </p>
                        </Grid>
                        <Grid container style={{ flexDirection: "column", width: "75%" }}/>
                        <Grid container style={{ textAlign: "right", flexDirection: "column",  width: "10%"}}>
                            <p class="m-0 text-center text-white">
                                Folge uns auf:<br />
                                <a className="nav-links" href={"https://www.facebook.com/pages/category/Nonprofit-organization/Freiwillige-Feuerwehr-Altenriet-322739161735218/"} target="_blank" rel="noopener noreferrer">
                                    <img src={facebook} alt="" height="10%"/>Facebook
                                </a>
                            </p>
                        </Grid>
                    </Grid>
                    <p class="m-0 text-center text-white">
                        Copyright &copy; Freiwillige Feuerwehr - Altenriet 2022
                    </p>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
