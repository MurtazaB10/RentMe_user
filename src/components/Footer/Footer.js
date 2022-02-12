import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const [show, setShow] = useState(false);

  return (
    <div className="main_footer">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <section className="upper_footer">
              <div>
                <div className="footer_content">
                  <h1>
                    <strong>
                      Rentish: Upgrade to your dream lifestyle at an
                      unbelievably low price!
                    </strong>
                  </h1>
                  <p>
                    Rentish is your ticket to a better lifestyle in India. We
                    provide designer furniture, the newest gadgets, and
                    bestselling appliances on rent in major Indian cities. You
                    can use the best products available in the market at just a
                    fraction of their retail value. You pay us a small monthly
                    fee, which becomes lesser the longer you rent from us.
                  </p>
                  <p>
                    Besides saving you money, we do our best to provide you with
                    an exceptional, super-comfortable rental experience. Our
                    ordering process is straightforward and efficient. You can
                    order from us in a matter of minutes from your PC or
                    smartphone. We offer speedy delivery in major Indian cities,
                    namely Bangalore, Mumbai, Delhi, Chennai, Pune, Hyderabad,
                    Gurgaon, and Noida.
                  </p>
                  <p>
                    No matter what product you rent from us, we will provide you
                    with several complementary benefits with it. The benefits
                    range from a yearly product swap option to a periodic free
                    maintenance service. These are benefits no regular retailer
                    offers. Start renting now!
                  </p>
                  {show && (
                    <>
                      <h2>
                        <strong>
                          We Provide All The Furniture, Appliances, And Gadgets
                          You Will Ever Need
                        </strong>
                      </h2>
                      <ul>
                        <li></li>
                      </ul>
                    </>
                  )}
                </div>
                <div className="read">
                  <span
                    onClick={() => {
                      setShow(!show);
                    }}
                  >
                    Read {show ? "Less" : "More"}{" "}
                  </span>{" "}
                  &nbsp;
                  <i class="fas fa-chevron-right"></i>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-9 col-12">
            <div className="row">
              <div className="col-md-4 col-12">
                <div className="footer_links">
                  <h2>Rentish</h2>
                  <ul>
                    <li>
                      <Link to="/" className="link">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="link">
                        Culture
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="link">
                        Investors
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="link">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="link">
                        Contact
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="link">
                        Our Benefits
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="link">
                        Sitemap
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="footer_links">
                  <h2>Information</h2>
                  <ul>
                    <li>
                      <Link to="/" className="link">
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="link">
                        FAQs
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="link">
                        Documents Required
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 col-12">
                <div className="footer_links">
                  <h2>Policies</h2>
                  <ul>
                    <li>
                      <Link to="/" className="link">
                        Shipping Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="link">
                        Cancellation & Return
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="link">
                        Privacy Policy
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="link">
                        Rental Terms & Conditions
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="link">
                        Referral Terms & Conditions
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-12">
            <div className="footer_links">
              <h2>Need Help ?</h2>
              <ul className="contact_options">
                <li className="contact">
                  <i class="far fa-paper-plane"></i>
                  <a href="mailto:karun@gmail.com" className="ms-3">
                    <span>karun@gmail.com</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="Footer_line">
        <div className="container">
          <div className="block"></div>
        </div>
      </div>
      <section className="footer_copyright">
        <div className="container footer_copyright_container">
          <div className="row">
            <div className="col-sm-3 col-xs-12">
              <p> Ⓒ 2022. Karun Pvt. Ltd. </p>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="footer_links">
                <ul>
                  <li>
                    <a href="/" target="_blank">
                      <span>
                        <i class="fab fa-facebook-f"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/" target="_blank">
                      <span>
                        <i class="fab fa-twitter"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/" target="_blank">
                      <span>
                        <i class="fab fa-linkedin-in"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/" target="_blank">
                      <span>
                        <i class="fab fa-youtube"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/" target="_blank">
                      <span>
                        <i class="fab fa-instagram"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a href="/" target="_blank">
                      <span>
                        <i class="fab fa-dribbble"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-sm-3 col-xs-12">
              <div className="go_up">
                <nav>
                  <a href="#top">
                    <p>
                      Go Up &nbsp;<i class="fas fa-angle-up"></i>
                    </p>
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
