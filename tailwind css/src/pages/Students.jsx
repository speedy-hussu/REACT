import React from "react";
import Card from "../components/Card";
import dummyImg from "../assets/dummy.png";

function Students() {
  return (
    <div className="w-full  bg-gray-950 py-10">
      <h1 className="text-orange-200 mb-10 md:text-3xl text-2xl font-bold text-center">
        "Pure Hardwork,No Shortcuts"
      </h1>

      <div className=" w-full flex flex-wrap justify-evenly py-2">
        <Card title={"600+"} desc={"Esport Champions"} img={dummyImg} />
        <Card title={"76,000+"} desc={"Players Enrolled"} img={dummyImg} />
        <Card title={"3,000+"} desc={"Different Mentors"} img={dummyImg}/>
      </div>
    </div>
  );
}

export default Students;
