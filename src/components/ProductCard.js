import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "../styles/ProductCard.css";

function ProductCard({ product, showEditDelete, onProductDelete }) {
  const navigate = useNavigate();

  const handleEdit = () => {
    navigate("/edit-product", { state: { product } });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      axios
        .delete(`http://localhost:3000/products/deletep/${product.id}`)
        .then(() => {
          console.log("Product deleted successfully");
          if (onProductDelete) {
            onProductDelete(product.id);
          }
        })
        .catch((error) => {
          console.error("Error deleting product:", error);
        });
    }
  };

  return (
    <div className="product-card">
      <div className="product-image">
        <img src="/demo_image.jpeg" alt={product.itemName} />
      </div>
      <div className="product-details">
        <h3>{product.itemName}</h3>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Quantity: {product.qty}</p>
        <p>Location: {product.location}</p>
        {showEditDelete && (
          <div className="product-actions">
            <button onClick={handleEdit} className="edit-button">
              Edit
            </button>
            <button onClick={handleDelete} className="delete-button">
              Delete
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
  showEditDelete: PropTypes.bool,
  onProductDelete: PropTypes.func,
};

export default ProductCard;
