import React from "react";
import { Link } from "react-router-dom";

function Category({ name, clas }) {
  return (
    <Link to="/product" style={{ textDecoration: "none", color: "black" }}>
      <div className="d-flex align-items-center justify-content-center flex-column category">
        <p className="mb-1">
          <i class={clas}></i>
        </p>
        <p className="m-0">{name}</p>
      </div>
    </Link>
  );
}

export default Category;
