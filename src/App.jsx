import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function App() {
  const API = import.meta.env.VITE_API_URL;
  const [products, setProducts] = useState([]);
  const fetchProducts = async () => {
    const res = await axios.get(`${API}/`);
    setProducts(res.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <h1>MyStore</h1>
      {products &&
        products.map((product) => (
          <li key={product.id}>
            {product.name}-{product.price}
          </li>
        ))}
    </div>
  );
}
