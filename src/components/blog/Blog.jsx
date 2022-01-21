import React from "react";
import { Outlet } from "react-router-dom";

function Blog() {
    return (
        <div className="home">
            <div class="container">
              <h1 className="text-center mt-5">Eins&auml;tze</h1>
                <Outlet />
            </div>
        </div>
    );
}

export default Blog;
