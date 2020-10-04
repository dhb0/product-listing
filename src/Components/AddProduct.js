import React, { useState, useEffect } from "react";
import axios from "axios";

const AddProduct = (data, setData) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(null);
  const [category, setCategory] = useState("");
  const [id, setId] = useState(data.length);
  const [alert, setAlert] = useState({ show: false, text: null, type: null });
  const newItem = { title, price, description, image, category, id };
  const showAlert = (text, type) => {
    setAlert({ show: true, text, type });
    setTimeout(() => {
      setAlert({ show: false, text: null, type: null });
    }, 4000);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    axios
      .post("https://fakestoreapi.com/products", newItem)
      .then((response) =>{
        showAlert("Item has posted  to the server", "success");
        clear();
      }
      )
      .catch((error) => {
        showAlert("Beceremedik", "danger");
        clear();
      });
  };
  const clear = () => {
    setTitle("");
    setDescription("");
    setPrice('');
    setCategory("");
    setImage("");
  };
  return (
    <div className="container py-5">
      {alert.show && (
        <div class={`alert alert-${alert.type}`} role="alert">
          {alert.text}
        </div>
      )}
      <form onSubmit={submitHandler}>
        <div class="form-group">
          <label for="productTitle">Product Title</label>
          <input
            type="text"
            class="form-control"
            id="productTitle"
            aria-describedby="productTitle"
            placeholder="Enter the product title"
            required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </div>
        <div class="form-group">
          <label for="productDescription">Product Description</label>
          <input
            type="text"
            class="form-control"
            id="productDescription"
            aria-describedby="productDescription"
            placeholder="Enter the product description"
            required
            onChange={(e) => setDescription(e.target.value)}
            value={description}
          />
        </div>
        <div class="form-group">
          <label for="productImage">Image Link</label>
          <input
            type="text"
            class="form-control"
            id="productImage"
            aria-describedby="productImage"
            placeholder="Enter the product image"
            required
            onChange={(e) => setImage(e.target.value)}
            value={image}
          />
        </div>
        <div class="form-group">
          <label for="productPrice">Product Price</label>
          <input
            type="number"
            class="form-control"
            id="productPrice"
            aria-describedby="productPrice"
            placeholder="Enter the product Price"
            required
            onChange={(e) => setPrice(e.target.value)}
            value={price}
          />
        </div>
        <div class="form-group">
          <label for="select-control">Category</label>
          <select
            multiple
            class="form-control"
            id="select-control"
            required
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <option value="jewelery">Jewelery</option>
            <option value="men clothing">Men Clothing</option>
            <option value="electronics">Electronics</option>
            <option value="women clothing">Women Clothing</option>
          </select>
        </div>

        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
