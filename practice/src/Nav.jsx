import React from "react";
import { useSelector } from "react-redux";
function Nav() {
  const count = useSelector((s) => s.count.value);
  return <div>NAv CounTer VAlue {count} </div>;
}

export default Nav;
