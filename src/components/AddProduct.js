import React, { useState } from "react";
import axios from "axios";
import "../styles/AddProduct.css";

function AddProduct() {
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
    email: localStorage.getItem("email"),
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    let parsedValue = value;

    if (name === "qty") {
      parsedValue = parseInt(value, 10);
      if (parsedValue <= 0 || isNaN(parsedValue)) {
        return;
      }
    } else if (["h", "w", "price"].includes(name)) {
      parsedValue = parseFloat(value);
      if (parsedValue <= 0 || isNaN(parsedValue)) {
        return;
      }
    }

    if (["h", "w", "uom"].includes(name)) {
      setProduct({
        ...product,
        size: {
          ...product.size,
          [name]: parsedValue,
        },
      });
    } else {
      setProduct({
        ...product,
        [name]: parsedValue,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(product);
    axios
      .post("http://localhost:3000/products/create", product)
      .then((response) => {
        console.log("Product added successfully:", response.data);

        // Clear the form
        setProduct({
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
          email: localStorage.getItem("email"),
        });
      })
      .catch((error) => {
        console.error("Error adding product:", error);
      });
  };

  return (
    <div className="add-product-card">
      <div className="add-product-container">
        <h2>Add Product</h2>
        <form onSubmit={handleSubmit}>
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
              required
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
          <button type="submit" className="add-product-button">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
