import React, { useState, useEffect } from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

const BasicLayout = (props) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    setUser(localStorage.getItem("user"));
  }, [user]);

  return (
    <>
      <div className="container-scroller">
        <Header />
        <div className="page-body-wrapper">
          <div className="main-panel">
            <div className="content-wrapper">{props.children}</div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default BasicLayout;
