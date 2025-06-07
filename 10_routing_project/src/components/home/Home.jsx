import React from "react";
import "./Home.css";
import trophy from "../../img/trophy.png";
import { NavLink } from "react-router-dom";
function Home() {
  return (
    <div className="main">
      <div className="left">
        <img src={trophy} alt="Trophy" />
      </div>

      <div className="right">
        <h1>Lorem ipsum</h1>
        <h3> ipsum culpa provident expedita mollitia placeat omnis.</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
          tempore voluptates eveniet ut accusamus, velit, tempora natus id a
          aspernatur dolorem temporibus enim, in suscipit corporis numquam
          recusandae ullam sit.
        </p>
        <NavLink to={"contact"} id="contact-us">
          Contact-Us
        </NavLink>
      </div>
    </div>
  );
}

export default Home;
