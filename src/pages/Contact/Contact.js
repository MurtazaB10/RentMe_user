import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "./Contact.css";
// import { init } from "ityped";
import { useState, useEffect, useRef } from "react";
function Contact() {
  const textref = useRef();
  const phoneref = useRef();
  const addressref = useRef();
  // useEffect(() => {
  //   init(textref.current, {
  //     showCursor: false,
  //     backDelay: 1500,
  //     backSpeed: 50,
  //     disableBackTyping: true,
  //     strings: ["zaxr.wesd@gmail.com"],
  //   });
  //   init(addressref.current, {
  //     showCursor: false,
  //     backDelay: 1500,
  //     backSpeed: 60,
  //     disableBackTyping: true,
  //     strings: ["Address : abc xyz 123 ,xas (------) "],
  //   });
  //   init(phoneref.current, {
  //     showCursor: false,
  //     backDelay: 1500,
  //     backSpeed: 60,
  //     disableBackTyping: true,
  //     strings: ["+91 98676 34863"],
  //   });
  // }, []);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div className="contact-section">
      <div className="heading">
        <h1>Contact Us</h1>
      </div>
      <div className="contact-container">
        <div className="left-side-content">
          <h1>Our Information</h1>
          <p>Happy to have your feedback or ask us if you have any question?</p>
          <div className="icon">
            <i className="fa fa-map-marker"></i>
            <p ref={addressref}></p>
          </div>
          <div className="icon">
            <i className="fa fa-phone"></i>
            <p ref={phoneref}></p>
          </div>
          <div className="icon">
            <i className="fa fa-envelope"></i>
            <p ref={textref}></p>
          </div>
          <div className="social-image">
            <i className="fa fa-facebook"></i>
            <i className="fa fa-instagram"></i>
            <i className="fa fa-linkedin"></i>
          </div>
        </div>
        <div className="right-side-content">
          <div className="form-section">
            <form>
              <label htmlFor="name">Your Name </label>
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="message">Your message </label>
              <textarea
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Contact;
