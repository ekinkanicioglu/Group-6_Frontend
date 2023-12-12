// ProductList component

import React, { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import "../styles/ProductList.css";

function ProductList({ showEditDelete }) {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    axios
      .get("https://sellnow-backend.onrender.com/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductDelete = (deletedProductId) => {
    fetchProducts();
  };

  return (
    <div className="product-list-container">
      <div className="product-cards">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            showEditDelete={showEditDelete} // Use the prop value
            onProductDelete={handleProductDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
