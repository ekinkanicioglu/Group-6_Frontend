import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../styles/EditProduct.css";
import axios from "axios";


axios.put(https://sellnow-backend.onrender.com/products/modify/${product.id}, product)
  .then(() => {
    navigate(-1);
  })
  .catch((error) => {
    console.error("Error updating product:", error.response.data);
  });


function EditProduct() {
  const location = useLocation();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    size: {
      h: 0,
      w: 0,
      uom: "",
    },
    itemName: "",
    qty: 0,
    description: "",
    location: "",
    price: 0,
  });

  useEffect(() => {
    if (location.state && location.state.product) {
      setProduct(location.state.product);
    }
  }, [location.state]);

  const handleChange = (e) => {
  const { name, value } = e.target;

  // Check if the input is for the size object
  if (["h", "w", "uom"].includes(name)) {
    setProduct({
      ...product,
      size: {
        ...product.size,
        [name]: name === "uom" ? value : parseFloat(value),
      },
    });
  } else if (["qty", "price"].includes(name)) {
    // Parse integers for quantity and floats for price
    const parsedValue = name === "qty" ? parseInt(value, 10) : parseFloat(value);
    
    if (parsedValue <= 0 || isNaN(parsedValue)) {
      // Don't update for invalid values
      return;
    }

    setProduct({
      ...product,
      [name]: parsedValue,
    });
  } else {
    // Handle all other inputs as strings
    setProduct({
      ...product,
      [name]: value,
    });
  }
};
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    axios
      .put(http://localhost:3000/products/modify/${product.id}, product)
      .then(() => {
        navigate(-1);
      })
      .catch((error) => {
        console.error("Error updating product:", error);
      });
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div className="edit-product-container">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit} className="edit-product-form">
        <div>
          <label>Item Name:</label>
          <input
            type="text"
            name="itemName"
            required
            value={product.itemName}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Description:</label>
          <input
            type="text"
            name="description"
            value={product.description}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Price:</label>
          <input
            type="number"
            name="price"
            required
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Quantity:</label>
          <input
            type="number"
            name="qty"
            required
            value={product.qty}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Height:</label>
          <input
            type="number"
            name="h"
            required
            value={product.size.h}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Width:</label>
          <input
            type="number"
            name="w"
            required
            value={product.size.w}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Unit of Measurement:</label>
         <input
            type="text"
            name="uom"
            value={product.size.uom}
            onChange={handleChange}
/>
        </div>
        <div>
          <label>Location:</label>
          <input
            type="text"
            name="location"
            required
            value={product.location}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Save</button>
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditProduct;
