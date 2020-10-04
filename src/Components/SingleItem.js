import React from "react";

const SingleItem = ({title, category, id, description, price, image}) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
      <div className="card">
        <img className="card-img-top" src={image} alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text text-justify">
            {description}
          </p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Category: {category}</li>
          <li className="list-group-item">Price: {price} $</li>
        </ul>
      </div>
    </div>
  );
};

export default SingleItem;
