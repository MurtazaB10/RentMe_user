import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import Category from "./Category";
import "./Dashboard.css";
import SlideComponent from "./SlideComponent";

function Dashboard() {
  const [transition, setTransition] = useState(0);
  const [op, setOp] = useState(0.5);

  return (
    <div className="dashboard">
      <div className="d-flex align-items-center justify-content-center">
        <Carousel className="carousel" pause={false} interval={5000}>
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
      <div className="d-flex align-items-center justify-content-evenly my-5">
        <Category name="Packages" clas="fas fa-boxes" />
        <Category name="Furniture" clas="fas fa-couch" />
        <Category name="Appliances" clas="fas fa-tv" />
        <Category name="Electronics" clas="fas fa-tablet-alt" />
        <Category name="Fitness" clas="fas fa-bicycle" />
        <Category name="WFH Essentials" clas="fas fa-laptop-house" />
        <Category name="Upto 70% Off" clas="fas fa-shopping-bag" />
      </div>
      <div className="slider">
        <div className="main_head">
          You'll love to
          <span>take these home</span>
        </div>
        <div className="slide_nav">
          <div
            className="swipe_left"
            role="button"
            tabIndex="0"
            aria-label="Previous Slide"
            onClick={() => {
              if (transition != 0) {
                setTransition(transition + 15);
              }
              if (transition == -15) {
                setOp(0.5);
              }
            }}
            style={{ opacity: op }}
          >
            <i class="fas fa-chevron-right"></i>
          </div>
          <div
            className="swipe_right"
            role="button"
            tabIndex="0"
            aria-label="Next Slide"
            onClick={() => {
              setTransition(transition - 15);
              setOp(1);
            }}
          >
            <i class="fas fa-chevron-left"></i>
          </div>
        </div>
        <div className="overflow-hidden">
          <div
            className="slider_container"
            style={{ transform: `translateX(${transition}rem)` }}
          >
            <SlideComponent />
            <SlideComponent />
            <SlideComponent />
            <SlideComponent />
            <SlideComponent />
            <SlideComponent />
            <SlideComponent />
            <SlideComponent />
            <SlideComponent />
            <SlideComponent />
            <SlideComponent />
            <SlideComponent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
