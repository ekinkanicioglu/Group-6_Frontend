import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css";
import Navbar from "./Navbar";

function MyProducts() {
  const [products, setProducts] = useState([]);
  const userEmail = localStorage.getItem("email");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("https://sellnow-backend.onrender.com/products/myProducts")
      .then((response) => {
        const userProducts = response.data.filter(
          (product) => product.email === userEmail
        );
        setProducts(userProducts);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  const handleProductDelete = (deletedProductId) => {
    setProducts(products.filter((product) => product.id !== deletedProductId));
  };

  if (products.length === 0) {
    return (
      <div>
        <Navbar />
        No Products Added
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="product-list-container">
        <div className="product-cards">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
              showEditDelete={true}
              onProductDelete={handleProductDelete}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default MyProducts;
