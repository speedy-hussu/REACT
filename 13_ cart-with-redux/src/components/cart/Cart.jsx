import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./Cart.css";
import { MdCancel } from "react-icons/md";
import { addToCart, removeFromCart, reduceFromCart } from "../../app/cartSlice";

function Cart() {
  const cartItems = useSelector((s) => s.cart.cart);

  const totalPrice =
    Math.floor(
      cartItems.reduce(
        (total, item) => (total += item.quantity * item.price),
        0
      ) * 10
    ) / 10;
  const totalProducts = useSelector((s) => s.cart.totalQuantity);
  const dispatch = useDispatch();
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        TOTAL NUMBER OF PRODUCTS {totalProducts} AND TOTAL PRICE {totalPrice}
      </h1>
      <div className="cart">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cartItems.map((product) => (
            <div key={product.id} className="card">
              <MdCancel
                id="remove"
                onClick={() => dispatch(removeFromCart({ id: product.id }))}
              />

              <div className="image">
                <img src={product.image} />
              </div>
              <div className="title">
                <h1>{product.title}</h1>
              </div>
              <div className="bottom">
                <p>{product.price}</p>
                <div className="quantity">
                  <button
                    id="btn-dec"
                    onClick={() => {
                      dispatch(
                        reduceFromCart({
                          id: product.id,
                        })
                      );
                    }}
                  >
                    -
                  </button>
                  <p>{product.quantity}</p>
                  <button
                    id="btn-inc"
                    onClick={() => {
                      dispatch(
                        addToCart({
                          id: product.id,
                        })
                      );
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default Cart;
