import React from "react";

function Nav() {
  return (
    <nav className="w-[100%] h-15 bg-gray-800 text-white flex items-center justify-between px-15 fixed">
      <div className="text-[25px] text-[Monoton]" id="he">
        SPEEDY
      </div>

      <ul className="text-lg sm:flex md:w-80 sm:w-60 sm:justify-between hidden">
        <li>Home</li>
        <li>About</li>
        <li>Products</li>
      </ul>

      <button className="hidden sm:block rounded-full bg-amber-400 py-1 px-3 text-lg">
        Login
      </button>
    </nav>
  );
}

export default Nav;
