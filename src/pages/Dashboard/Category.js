import React from "react";

function Category({ name, clas }) {
  return (
    <div className="d-flex align-items-center justify-content-center flex-column category">
      <p className="mb-1">
        <i class={clas}></i>
      </p>
      <p className="m-0">{name}</p>
    </div>
  );
}

export default Category;
