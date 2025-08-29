import React from "react";

function Practice() {
  return (
    <div className="min-h-dvh min-w-dvw bg-gray-900 flex justify-center items-center">
      <div className="bg-green-400 w-100 md:bg-pink-300 md:flex md:w-2xl rounded-xl">
        <div className="text-white rounded-lg overflow-hidden">
          <img
            src="https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg"
            alt="img"
            className="md:w-75 md:h-full"
          />
        </div>
        <div className="md:w-80 px-2 py-3 md:ml-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
          obcaecati recusandae cumque numquam libero velit. Quod doloremque quas
          aspernatur vitae voluptatibus ducimus quis dicta fugiat, labore soluta
          modi corporis facere.
        </div>
      </div>
    </div>
  );
}

export default Practice;
