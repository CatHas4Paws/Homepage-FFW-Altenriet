import React from "react";
import ReactDOM from "react-dom";
import "./views/index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
    Navigation,
    Footer,
    Home,
    About,
    Contact,
    Blog,
    Posts,
    Post,
    M20220117,
    Disclaimer,
    Privacy,
    Imprint,
} from "./components";

ReactDOM.render(
    <Router>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Disclaimer" element={<Disclaimer />} />
            <Route path="/Privacy" element={<Privacy />} />
            <Route path="/Imprint" element={<Imprint />} />
            <Route path="/blog" element={<Blog />}>
                <Route path="" element={<Posts />} />
                <Route path=":postSlug" element={<Post />} />
                <Route path=":blog/M20220117" element={<M20220117 />} />
            </Route>
        </Routes>
        <Footer />
    </Router>,
    document.getElementById("root")
);

serviceWorker.unregister();
