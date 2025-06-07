import React, { useContext } from "react";
import "./Cart.css";
import { CartContext } from "../../Contex/CartContext";
function Cart() {
  const { cartItems, setCartItems } = useContext(CartContext);
  const removeFromCart = (index) => {
    const updatedCart = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCart);
  };
  return (
    <div className="cart">
      <h1>CART</h1>
      {cartItems.length == 0 ? (
        <h1>Cart is empty</h1>
      ) : (
        <ul>
          {cartItems.map((item, i) => {
            return (
              <li key={i}>
                {item.title} <button onClick={removeFromCart}>Remove</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
export default Cart;
