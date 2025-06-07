import React from "react";
import propTypes from "prop-types";
function Card(props) {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md bg-black">
      <img
        src="https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhcnRvb258ZW58MHx8MHx8fDA%3D"
        alt=""
        className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
      />
      <div className="mt-6 mb-2">
        <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
          {props.title}
          {props.num}
        </span>
        <h2 className="text-xl font-semibold tracking-wide">{props.text}</h2>
      </div>
      <p className="text-gray-300">
        t consectetur, adipisicing elit.
        Distinctio tempora ipsum soluta amet
      </p>
    </div>
  );
}
Card.propTypes = {
  title: propTypes.string,
  text: propTypes.string,
  num: propTypes.number,
};
Card.defaultProps = {
  title: "default",
  text: "default text",
  num: 0,
};
export default Card;
