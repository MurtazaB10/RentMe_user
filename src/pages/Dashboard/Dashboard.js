import React from "react";
import { Carousel } from "react-bootstrap";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="d-flex align-items-center justify-content-center">
        <Carousel className="carousel" pause={false} interval={1000}>
          <Carousel.Item>
            <img
              className="d-block w-100 h-25"
              src={process.env.PUBLIC_URL + "/Images/sample1.jpg"}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-25"
              src={process.env.PUBLIC_URL + "/Images/sample2.jpg"}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 h-25"
              src={process.env.PUBLIC_URL + "/Images/sample3.jpg"}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div>
        <div>
          <p>
            <i class="fas fa-box-open"></i>
          </p>
          <p>Packages</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
