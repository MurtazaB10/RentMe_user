import React, { useState, useEffect } from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Button from "react-bootstrap/Button";

const Header = () => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, []);

  return (
    <div className="Header">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="w-75 container-fluid">
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
            <ul className="navbar-nav me-5 mb-2 mb-lg-0">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
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
              <span>
                <ShoppingCartIcon />
              </span>
              <span>cart</span>
            </div>
            <Button className="login" variant="outline-danger">Login/Signup</Button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
