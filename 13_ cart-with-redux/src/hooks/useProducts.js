import { useEffect, useState } from "react";

export default function useProducts(category) {
  const [products, setProducts] = useState([]);

  async function fetchApi() {
    try {
      let api = await fetch(
        `https://dummyjson.com/products/search?q=${category}`
      );
      let data = await api.json();
      setProducts(data.products);
    } catch (e) {
      console.log(e);
    }
  }
  useEffect(() => {
    fetchApi();
  }, [category]);
  return products;
}
