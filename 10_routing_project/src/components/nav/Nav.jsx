import React from "react";
import { NavLink } from "react-router-dom"; // Import Link
import "./Nav.css";

function Nav() {
  return (
    <div className="nav">
      <h1>SPEEDY</h1>
      <ul className="nav-links">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => {
              return isActive ? "active-link" : "li";
            }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/product"
            className={({ isActive }) => (isActive ? "active-link" : "li")}
          >
            Product
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active-link" : "li")}
          >
            About
          </NavLink>
        </li>
      </ul>
      <div className="btns">
        <button id="btn-1">Log In</button>
        <button id="btn-2">Get Started</button>
      </div>
    </div>
  );
}

export default Nav;
