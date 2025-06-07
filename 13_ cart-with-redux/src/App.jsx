import React, { useState } from "react";
import "./App.css";
import Nav from "./components/navbar/Nav";
import { Provider } from "react-redux";
import Products from "./components/product/Products";
import store from "./app/store";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "./components/cart/cart";

function App() {
  const [category, setCategory] = useState("phone");

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Nav setCategory={setCategory} category={category} />
        <Routes>
          <Route path="/" element={<Products category={category} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
