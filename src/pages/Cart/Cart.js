import React from "react";
import "./Cart.css";

function Cart() {
  return (
    <div className="cart_container">
      <div className="cart_img">
        <img
          src="https://www.rentomojo.com/public/images/error/no-cart.png"
          alt="Empty Cart Image"
        />
        <div className="empty_cart_data mt-5">
          <h3>No items in cart</h3>
          <p>
            Add a few items to your cart and come back here for an <br />{" "}
            express checkout process!
          </p>
        </div>
      </div>
      <div className="browse_catalog_div mt-5 mb-5">
          <a href="/">
              Browse catalogue
          </a>
      </div>
    </div>
  );
}

export default Cart;
