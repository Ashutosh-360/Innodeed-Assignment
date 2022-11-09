import React from "react";
import { Link } from "react-router-dom";

function CarComponent({ data }) {
  return (
    <div className="car-component-card">
      <h4>{data.bodyType}</h4>
      <h2>{data.modelName}</h2>
      <h4>{data.modelType}</h4>
      <img src={data.imageUrl} alt="" />
      <div className="links">
        <Link>Learn ></Link>
        <Link>Shop ></Link>
      </div>
    </div>
  );
}

export default CarComponent;
