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
                    namely Indore, Bangalore, Mumbai, Delhi, Chennai, Pune,
                    Hyderabad, Gurgaon, and Noida.
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
                      <p>
                        Whether you need appliances for the house you’ve just
                        moved into or require furniture for your home office, we
                        have something for you.
                      </p>
                      <ul>
                        <li>
                          <a href="/">Furniture on rent</a>: We provide
                          furniture for your living room, dining room, bedroom,
                          kitchen, and study. We also provide home office
                          furniture.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="/">Appliances on rent</a>: We offer everyday
                          appliances such as washing machines, microwaves,
                          fridges, and cooktops. Our appliances are made by
                          reputable brands like Samsung.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="/">Electronics on rent</a>: Do you need the
                          latest Android smartphone or the new iPhone? Gadget
                          lovers will enjoy our selection of handpicked
                          smartphones, laptops, tablets, and smart home devices.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <a href="/">Furniture & appliance packages on rent</a>
                          : When you have an entire home to furnish, you can do
                          it for cheap by picking our furniture or appliance
                          packages. We offer the best deals on furniture,
                          appliances,
                        </li>
                      </ul>
                      <h2>
                        <strong>
                          Why Buy From A Store When You Can Rent From Us
                          Instead!
                        </strong>
                      </h2>
                      <p>
                        Purchasing furniture, appliances, and electronics from a
                        store is expensive. Rentish, however, makes it
                        affordable for you to own the latest products in the
                        market. We offer deals and benefits no retailer can
                        match!
                      </p>
                      <ul>
                        <li>
                          <strong>Free delivery and installation</strong>: When
                          you rent any item from us in Indore, we will deliver
                          it to you for free. We will also install said item for
                          you in any room in your home.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <strong>Free relocation</strong>: What happens to your
                          rental products when you move to a different house in
                          Indore? RentoMojo will move them to your new location
                          in Indore or any supported major city for free!
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <strong>Product swap</strong>: Every 12 months,
                          RentoMojo allows you to swap out your rental item for
                          a new, different design! You get to keep trying out
                          the latest products in the market when you rent from
                          us.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <strong>Damage waiver</strong>: You don’t have to
                          stress about minor damages.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <strong>Free maintenance</strong>: Your rental items
                          will wear down with time. But, our team will maintain
                          them for you periodically to keep them in top shape.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <strong>Hassle-free returns</strong>: Changed your
                          mind at the time of delivery? You can cancel your
                          order and we will give you a full deposit refund, no
                          questions asked.
                        </li>
                      </ul>
                      <h2>
                        <strong>
                          Make Rentish Your Go-To Service In Indore
                        </strong>
                      </h2>
                      <p>
                        Rentish gives you a chance to live a better lifestyle
                        without emptying your wallet. Here are some reasons why
                        we are one of India’s leading rental brands:
                      </p>
                      <ul>
                        <li>
                          <strong>Flexible plans</strong>: We give you the
                          option to subscribe to our products, short-term or
                          long-term. You can rent from us for a few weeks or a
                          few years—the choice is yours.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <strong>Close early</strong>: We don’t believe in
                          binding contracts. You can close your contract with us
                          anytime. You only have to pay until the current usage
                          date.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <strong>Quality checks</strong>: Quality matters to us
                          as much as it matters to you. Every product we ship
                          out undergoes strict quality checks. You get to use
                          only the best, defect-free furniture, appliances, and
                          electronics.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <strong>Excellent service</strong>: Rentish puts our
                          customers first. We offer an excellent, reliable
                          service in Indore. Our crew is well-trained and
                          efficient.
                        </li>
                      </ul>
                      <ul>
                        <li>
                          <strong>Monthly savings</strong>: Rentish’s monthly
                          fees are much cheaper than the EMI you pay when you
                          buy furniture, appliances, and electronics from a
                          store. Renting from us is the smart thing to do!
                        </li>
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
                <li>
                  <a className="chat" href="/contact">
                    Chat with us
                  </a>
                </li>
                <li>
                  <a className="chat" href="/feedback">
                    Feedback
                  </a>
                </li>
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
