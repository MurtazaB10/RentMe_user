import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import "./Contact.css";
// import { init } from "ityped";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import Snackbar from "../../components/Alert/SnackBar";
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
  const [trigger, setTrigger] = useState("");
  const [data, setData] = useState();
  const [confirmationSnackbarMessage, setConfirmationSnackbarMessage] =
    useState("");
  const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] =
    useState(false);

  const fetchData = async () => {
    try {
      const res = await axios.post("/user/updateuser");
      console.log(res);
      setData(res.data.data);
    } catch (error) {
      if (error.message === "Request failed with status code 401") {
        localStorage.clear();
        setTrigger(!trigger);
      }
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [trigger]);

  const submit = async (e) => {
    e.preventDefault();
    try {
      axios.post("/user/add-query", {
        query: message,
        email: email,
        id: data._id,
      });
      setConfirmationSnackbarMessage("Query Added Successfully!");
      setConfirmationSnackbarOpen(true);
      setTrigger(!trigger);
    } catch (error) {
      if (error.message === "Request failed with status code 401") {
        localStorage.clear();
        setTrigger(!trigger);
      } else {
        console.error(error);
        setConfirmationSnackbarMessage(error.message);
        setConfirmationSnackbarOpen(true);
      }
    }
  };

  return (
    <section className="section">
      <div className="section-container">
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p>Happy to have your feedback or ask us if you have any question?</p>
          <div className="icon d-flex align-items-center">
            <i className="fa fa-map-marker"></i>
            <p className="mb-0">114 kd gate ujjain</p>
          </div>
          <div className="icon d-flex align-items-center">
            <i className="fa fa-phone"></i>
            <p className="mb-0">9669988016</p>
          </div>
          <div className="icon d-flex align-items-center">
            <i className="fa fa-envelope"></i>
            <p className="mb-0">karun@gmail.com</p>
          </div>
          <div className="social">
            <a href="#">
              <i className="fa fa-facebook-f"></i>
            </a>
            <a href="#">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <form onSubmit={submit} className="contact-form">
          <h2>Send Information</h2>
          <div className="formBox">
            <div className="inputBox w50">
              <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span>Your Name </span>
            </div>
            <div className="inputBox w50">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span>Your Email</span>
            </div>
            <div className="inputBox w100">
              <textarea
                type="text"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <span>Your message </span>
            </div>
            <div className="inputBox w100">
              <button type="submit">Send</button>
            </div>
          </div>
        </form>
      </div>
      <Snackbar
        confirmationSnackbarMessage={confirmationSnackbarMessage}
        confirmationSnackbarOpen={confirmationSnackbarOpen}
        setConfirmationSnackbarOpen={setConfirmationSnackbarOpen}
      />
    </section>
  );
}
/*
      <div className="title">
        <h2>Get in touch</h2>
      </div>
      <div className="section-box">
       
  <div className="contact form">
  <h3>Contact us Here</h3>
  <form>
    <div className="formBox">
      <div className="row50">
        <div className="inputBox">
          <span>Your Name </span>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="inputBox">
          <span>Your Email</span>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        
      </div>
      <div className="row100">
        <div className="inputBox">
          <span>Your message </span>
          <textarea
            type="text"
            id="message"
            name="message"
            placeholder="type your message here"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
      </div>
      <div className="row100">
        <div className="inputBox">
          <button type="submit">Send</button>
        </div>
      </div>
    </div>
  </form>
</div>
<div className="contact info"></div>
<div className="contact map"></div>
</div>
*/
export default Contact;
/*
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
                <label htmlFor="name">
                  Your Name </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                <label htmlFor="email">
                  Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                <label htmlFor="message">
                  Your message </label>
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
*/
