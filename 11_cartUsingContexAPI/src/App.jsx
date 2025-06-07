import React from "react";
import Products from "./components/Product/Products";
import Cart from "./components/Cart/Cart";
import "./App.css";

function App() {
  return (
    <div className="main">
      <div className="parent">
        <Products
          category={"soap"}
          title={"Lifebuoy"}
          price={20}
        />
        <Products
          category={"Hair Oil"}
          title={"Parachute Jasmine"}
          price={50}
        />
        <Products
          category={"Body Lotion"}
          title={"Nivea"}
          price={200}
        />
        <Products
          category={"Face Wash"}
          title={"himalaya"}
          price={80}
        />
      </div>
      <Cart />
    </div>
  );
}

export default App;
