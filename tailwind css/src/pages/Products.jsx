import Card from "../components/Card";
import prodImg from "../assets/gaming.png";
function Products() {
  return (
    <div className="w-full  bg-gray-950 py-10">
      <h1 className="text-orange-200 mb-10 md:text-3xl text-2xl font-bold text-center">
        Our Products
      </h1>

      <div className=" w-full flex flex-wrap justify-evenly py-2">
        <Card title={"100+"} desc={"Gaming Consoles"} img={prodImg} />
        <Card title={"76,000+"} desc={"Gaming PC"} img={prodImg} />
        <Card title={"3,000+"} desc={"GPU's"} img={prodImg} />
        <Card title={"900+"} desc={"Wifi Router"} img={prodImg} />
        <Card title={"80+"} desc={"servers"} img={prodImg} />
        <Card title={"30+"} desc={"Centers"} img={prodImg} />
      </div>
    </div>
  );
}

export default Products;
