function Card({ title, desc ,img}) {
  return (
    <div className=" w-45 flex flex-col items-center text-white m-5">
      <img
        src={img}
        className="w-30 p-2 h-auto mb-2 bg-white rounded-full"
      />
      <h1 className="font-bold text-xl">{title}</h1>
      <p className="text-lg text-center text-gray-300">{desc}</p>
    </div>
  );
}

export default Card;
