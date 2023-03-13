import React, { useState } from "react";
import "./Nav.css";
import { Link } from "react-router-dom";
import All from "./All.json";
const Nav = (props) => {

    return (
        <header>
            <div className="logo">
                <h1>TechGenius</h1>
            </div>
            <nav>
                <Link to="/cart" className="nav-link nav-link-ltr"><img id="cart" src="\black_heart.jpg" />
                </Link>
                {props.length > 0 ? <span>{props.length}</span> : null}
            </nav>

        </header>
    );
}

export default Nav;