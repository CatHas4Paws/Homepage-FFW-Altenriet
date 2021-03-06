import React from "react";
import { NavLink } from "react-router-dom";
import "../views/styles.css";

function Navigation() {
    return (
        <div className="navigation">
            <nav className="navbar navbar-expand navbar-dark bg-dark">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        Feuerwehr Altenriet
                    </NavLink>
                    <div>
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <NavLink className="nav-links" to="/">
                                    Home
                                    <span className="sr-only">(current)</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-links" to="/about">
                                    &Uuml;ber Uns
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-links" to="/contact">
                                    Kontakt
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-links" to="/blog">
                                    Eins&auml;tze
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
  );
}

export default Navigation;
