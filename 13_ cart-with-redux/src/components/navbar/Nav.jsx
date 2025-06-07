import React, { useState } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import "./Nav.css";
import { useSelector } from "react-redux";
import Products from "../product/Products";
function Nav({ setCategory }) {
  const cartItems = useSelector((s) => s.cart.cart);
  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );
  return (
    <nav>
      <div className="logo">
        <h1>SPEEDY</h1>
      </div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="redmi note 11 ?"
          onChange={(e) => {
            if (e.target.value != "") setCategory(e.target.value);
            else setCategory("phone");
          }}
        />
      </div>
      <div className="buttons">
        <NavLink
          to="/"
          className={`product-icon ({ isActive }) =>
            isActive ? "active"
          `}
        >
          <p>products</p>
        </NavLink>
        <NavLink
          to="/cart"
          className={`cart-icon ({ isActive }) =>
            isActive ? "active":"not-active"`}
        >
          <FaCartShopping id="icon" />
          <p id="cart-length">{cartItems.length}</p>
        </NavLink>
      </div>
    </nav>
  );
}
export default Nav;
