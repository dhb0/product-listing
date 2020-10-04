import React, { useState } from "react";
import DisplayArea from "./DisplayArea";

const Product = ({ data, loading }) => {
  const [dataToDisplay, setDataToDisplay] = useState(data);
  const [itemPerPage, setItemPerPage] = useState(5);
  const [currentPag, setCurrentPag] = useState(0);
  const chunkArray = (myArray, chunk_size) => {
    let results = [];

    while (myArray.length) {
      results.push(myArray.splice(0, chunk_size));
    }

    return results;
  };
  return (
    <div className="container row mt-5 d-flex justify-content-between align-items-center text-center">
      <div className="col-md-6 col-xs-12">
        <form
          onChange={(e) => {
            setItemPerPage(Number(e.target.value));
            setCurrentPag(0);
          }}
        >
          <p className="lead">Items per page</p>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios1"
              value="5"
              defaultChecked="true"
            />
            <label className="form-check-label" htmlFor="exampleRadios1">
              5
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="exampleRadios"
              id="exampleRadios2"
              value="10"
            />
            <label className="form-check-label" htmlFor="exampleRadios2">
              10
            </label>
          </div>
        </form>
      </div>
      <div className="col-md-6 col-xs-12">
        <div className="btn-group" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() =>
              setDataToDisplay(
                [...data].sort(function (a, b) {
                  return a.title < b.title ? -1 : 1;
                })
              )
            }
          >
            A-Z
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() =>
              setDataToDisplay(
                [...data].sort(function (a, b) {
                  return a.title > b.title ? -1 : 1;
                })
              )
            }
          >
            Z-A
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() =>
              setDataToDisplay([...data].sort((a, b) => b.price - a.price))
            }
          >
            Price Descending
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() =>
              setDataToDisplay([...data].sort((a, b) => a.price - b.price))
            }
          >
            Price Ascending
          </button>
          <button type="button" className="btn btn-secondary">
            <select
              class="form-control"
              onChange={(e) => {
                e.target.value === "default"
                  ? setDataToDisplay([...data])
                  : setDataToDisplay(
                      [...data].filter(
                        (item) => item.category == e.target.value
                      )
                    );
              }}
            >
              <option value="default">Category</option>
              <option value="jewelery">Jewelery</option>
              <option value="men clothing">Men Clothing</option>
              <option value="women clothing">Women Clothing</option>
              <option value="electronics">Electronics</option>
            </select>
          </button>
        </div>
      </div>
      <DisplayArea
        data={chunkArray([...dataToDisplay], itemPerPage)}
        loading={loading}
        currentPag={currentPag}
        setCurrentPag={setCurrentPag}
      />
    </div>
  );
};

export default Product;
