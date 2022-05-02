import React, { useEffect, useState } from "react";
import { Carousel } from "react-bootstrap";
import Category from "./Category";
import "./Dashboard.css";
import SlideComponent from "./SlideComponent";
import BedIcon from "@mui/icons-material/Bed";
import EngineeringIcon from "@mui/icons-material/Engineering";
import CancelScheduleSendOutlinedIcon from "@mui/icons-material/CancelScheduleSendOutlined";
import { Link } from "react-router-dom";
import SwiperComponent from "./SwiperComponent";
import axios from "axios";
import { setUser } from "../../redux/actions/userActions";
import { useDispatch, useSelector } from "react-redux";

function Dashboard() {
  const [transition1, setTransition1] = useState(0);
  const [op1, setOp1] = useState(0.5);
  const [transition2, setTransition2] = useState(0);
  const [op2, setOp2] = useState(0.5);
  const [prod, setProd] = useState([]);
  const [user, setUser] = useState();
  const [feedback, setFeedback] = useState([]);
  const [trigger, setTrigger] = useState(true);
  const dispatch = useDispatch();

  async function fetchData() {
    try {
      const pro = await axios.post("/product");
      setProd(pro.data.data);
      const feed = await axios.get("/admin/feedback");
      setFeedback(feed.data.data);
      const res = await axios.post("/user/updateuser");
      setUser(res.data.data);
      dispatch(setUser(res.data.data));
    } catch (error) {
      if (error.message === "Request failed with status code 401") {
        localStorage.clear();
      }
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [trigger]);

  return (
    <div className="dashboard">
      {/* Carousel */}
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

      {/* Category */}
      <div className="d-flex align-items-center justify-content-evenly my-5">
        <Category name="Packages" clas="fas fa-boxes" />
        <Category name="Furniture" clas="fas fa-couch" />
        <Category name="Appliances" clas="fas fa-tv" />
        <Category name="Electronics" clas="fas fa-tablet-alt" />
        <Category name="Fitness" clas="fas fa-bicycle" />
        <Category name="WFH Essentials" clas="fas fa-laptop-house" />
        <Category name="Upto 70% Off" clas="fas fa-shopping-bag" />
      </div>

      {/* Slider */}
      <div className="slider_container">
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
                if (transition1 != 0) {
                  setTransition1(transition1 + 15);
                }
                if (transition1 == -15) {
                  setOp1(0.5);
                }
              }}
              style={{ opacity: op1 }}
            >
              <i class="fas fa-chevron-right"></i>
            </div>
            <div
              className="swipe_right"
              role="button"
              tabIndex="0"
              aria-label="Next Slide"
              onClick={() => {
                setTransition1(transition1 - 15);
                setOp1(1);
              }}
            >
              <i class="fas fa-chevron-left"></i>
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className="slider_container"
              style={{ transform: `translateX(${transition1}rem)` }}
            >
              {prod.map((val, ind) => {
                return <SlideComponent details={val} key={ind} />;
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Advantages */}
      <div className="advantage">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="main_head">
                There's more <span>to renting</span>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-6">
              <div className="inner">
                <BedIcon className="bed" />
                <h3>Finest-quality products</h3>
                <p>
                  Quality matters to you, and us! That's why we do a strict
                  quality check for every product.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6">
              <div className="inner">
                <i class="fas fa-map-marked-alt fs-1 p-2"></i>
                <h3>Free relocation</h3>
                <p>
                  Changing your house or even city? We'll relocate your rented
                  products for free.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6">
              <div className="inner">
                <EngineeringIcon className="bed" />
                <h3>Free maintenance</h3>
                <p>
                  Keeping your rented products in a spick and span condition is
                  on us, so you can sit back and relax.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-6">
              <div className="inner">
                <CancelScheduleSendOutlinedIcon className="bed" />
                <h3>Cancel anytime</h3>
                <p>
                  Pay only for the time you use the product and close your
                  subscription without any hassle.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6">
              <div className="inner">
                <i class="fas fa-shipping-fast fs-1 p-2"></i>
                <h3>Easy return on delivery</h3>
                <p>
                  If you don't like the product on delivery, you can return it
                  right away—no questions asked.
                </p>
              </div>
            </div>
            <div className="col-md-4 col-sm-4 col-xs-6">
              <div className="inner">
                <i class="fas fa-sort-alpha-up fs-1 p-2"></i>
                <h3>Keep upgrading</h3>
                <p>
                  Bored of the same product? Upgrade to try another, newer
                  design and enjoy the change!
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <Link to="/about" className="link">
                know more
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Feedback */}
      <div className="feedback">
        <div className="feedback_container">
          <div className="feedback_box">
            <div className="intro">
              <div className="main_head">
                Over 1.5 lac <span>happy subscribers</span>
              </div>
              <p>
                Here's what they have to say about their Rentish experience.
              </p>
              <div className="slide_nav">
                <div
                  className="swipe_left"
                  role="button"
                  tabIndex="0"
                  aria-label="Previous Slide"
                  onClick={() => {
                    if (transition2 != 0) {
                      setTransition2(transition2 + 15);
                    }
                    if (transition2 == -15) {
                      setOp2(0.5);
                    }
                  }}
                  style={{ opacity: op2 }}
                >
                  <i class="fas fa-chevron-left"></i>
                </div>
                <div
                  className="swipe_right"
                  role="button"
                  tabIndex="0"
                  aria-label="Next Slide"
                  onClick={() => {
                    setTransition2(transition2 - 15);
                    setOp2(1);
                  }}
                >
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="feedback_box">
            <div className="swiper_container">
              <div
                className="swiper_warpper"
                style={{ transform: `translateX(${transition2}rem)` }}
              >
                {feedback.map((val, ind) => {
                  return <SwiperComponent feed={val} key={ind} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
