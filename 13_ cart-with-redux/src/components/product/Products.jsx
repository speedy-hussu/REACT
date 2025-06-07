import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../../app/productSlice";
import { addToCart } from "../../app/cartSlice";
import "./Product.css";

function Products({ category }) {
  const dispatch = useDispatch();
  const { cache, currentProducts, status } = useSelector((s) => s.products);

  useEffect(() => {
    if (!cache[category]) {
      dispatch(fetchProducts(category));
    }
  }, [category, dispatch, cache]);

  const products = cache[category] || currentProducts;

  return (
    <div className="parent">
      {products.map((product) => {
        return (
          <div key={product.id} className="card">
            <div className="image">
              <img src={product.images[0]} />
            </div>
            <div className="title">
              <h1>{product.title}</h1>
            </div>
            <div className="bottom">
              <p>{product.price}</p>
              <button
                id="btn"
                onClick={() => {
                  dispatch(
                    addToCart({
                      id: product.id,
                      title: product.title,
                      image: product.images[0],
                      price: product.price,
                    })
                  );
                }}
              >
                Add to Cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Products;
