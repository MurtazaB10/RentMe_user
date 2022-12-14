import React, { useState, useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "react-bootstrap/Button";
import axios from "axios";

const Header = () => {
  const [user, setUser] = useState();
  const [trigger, setTrigger] = useState(true);

  useEffect(() => {
    setUser(localStorage.getItem("refreshToken"));
  }, [trigger]);

  const logoutClick = async (e) => {
    e.preventDefault();
    await axios.post("/logout");
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div
      className="Header d-flex align-items-center justify-content-center"
      id="top"
    >
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img
              className="w-100"
              src={process.env.PUBLIC_URL + "/Images/logo.png"}
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form className="d-flex position-relative">
              <input
                className="form-control me-2 search"
                type="search"
                placeholder="Search for products"
                aria-label="Search"
              />
              <button
                className="btn position-absolute top-0 search-btn"
                type="submit"
              >
                <SearchIcon />
              </button>
            </form>
            <div className="ms-3 cart">
              <a href="/cart">
                <span style={{ color: "#f7de36" }}>
                  <ShoppingCartIcon />
                </span>
                <span style={{ color: "#f7de36" }}>cart</span>
              </a>
            </div>
            {user ? (
              <div className="user ms-5">
                <div class="btn-group" role="group" aria-label="Basic example">
                  <button
                    onClick={() => {
                      window.location.pathname = "/profile";
                    }}
                    type="button"
                    class="btn btn-primary"
                  >
                    Profile
                  </button>
                  <button
                    onClick={() => {
                      window.location.pathname = "/order";
                    }}
                    type="button"
                    class="btn btn-primary"
                  >
                    Order
                  </button>
                  <button
                    onClick={logoutClick}
                    type="button"
                    class="btn btn-primary"
                  >
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Button href="/login" className="login" variant="outline-danger">
                Login/Signup
              </Button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
