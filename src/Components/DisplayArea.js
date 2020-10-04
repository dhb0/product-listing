import React, { useState, useEffect } from "react";
import SingleItem from "./SingleItem";

const DisplayArea = ({ data, loading, currentPag, setCurrentPag }) => {
  let pagItems = [];
  for (let i = 0; i < data.length; i++) {
    pagItems.push(
      <li
        className={i == currentPag ? "page-item active" : "page-item"}
        key={i + 1}
      >
        <a className="page-link" href="#" onClick={() => setCurrentPag(i)}>
          {i + 1}
        </a>
      </li>
    );
  }

  return (
    <div className="container my-5 mx-auto">
      <div className="cardarea container row">
        {!loading &&
          data[currentPag].map((item) => {
            return (
              <SingleItem
                title={item.title}
                category={item.category}
                id={item.id}
                description={item.description}
                image={item.image}
                price={item.price}
              />
            );
          })}
      </div>
      <nav aria-label="Page navigation example mx-auto">
        <ul className="pagination">
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={() => currentPag !== 0 && setCurrentPag(currentPag - 1)}
            >
              Previous
            </a>
          </li>
          {pagItems}
          <li className="page-item">
            <a
              className="page-link"
              href="#"
              onClick={() =>
                currentPag <= data.length - 2 && setCurrentPag(currentPag + 1)
              }
            >
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default DisplayArea;
