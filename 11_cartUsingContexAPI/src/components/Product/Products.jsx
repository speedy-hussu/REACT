import React, { useContext } from "react";
import "./Products.css";
import { CartContext } from "../../Contex/CartContext";

function Products({ img, category, title, price }) {
  const { cartItems, setCartItems } = useContext(CartContext); // Access context

  // Function to add item to cart
  const addToCart = () => {
    const newItem = {category, title, price };
    setCartItems([...cartItems, newItem]); // Update state
  };
   
  console.log(cartItems)

  return (
    <div className="product-card">
      <div className="product-tumb">
        <img src={img} alt="Product" />
      </div>
      <div className="product-details">
        <span className="product-catagory">{category}</span>
        <h4>
          <a href="#">{title}</a>
        </h4>
        <div className="product-bottom-details">
          <div className="product-price">${price}</div>
          <button onClick={addToCart}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
}

export default Products;
