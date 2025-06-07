import React, { useEffect, useState } from "react";
import "./Product.css";
import { useLoaderData } from "react-router-dom";
function Product() {
  // async function fetchProducts() {
  //   let url = await fetch("https://dummyjson.com/products");
  //   let data = await url.json();
  //   setProducts(data.products);
  // }
  // const [products, setProducts] = useState([]);
  // useEffect(() => {
  //   fetchProducts();
  // }, []);
  // console.log(products);
  const data = useLoaderData();
  const products = data.products;

  return (
    <>
      <div className="parent">
        {products.map((product) => {
          return (
            <div className="product-card" key={product.id}>
              <div className="product-tumb">
                <img  src={product.images[0]} alt="" />
              </div>
              <div className="product-details">
                <span className="product-catagory">{product.category}</span>
                <h4>
                  <a href="">{product.title}</a>
                </h4>
                <p>{product.description?.substring(0, 100)}...</p>
                <div className="product-bottom-details">
                  <div className="product-price">${product.price}</div>
                  <div className="ratings">{product.rating} ⭐</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Product;
export const productLoader = async () => {
  let url = await fetch("https://dummyjson.com/products");
  return url.json();
};
