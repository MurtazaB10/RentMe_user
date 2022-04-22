import "./Login.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import React, { useState } from "react";
import Snackbar from "../Alert/SnackBar";
import { useHistory } from "react-router-dom";
import axios from "axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  const [phonenumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [addClass, setAddClass] = useState("");
  const [confirmationSnackbarMessage, setConfirmationSnackbarMessage] =
    useState("");
  const [confirmationSnackbarOpen, setConfirmationSnackbarOpen] =
    useState(false);

  const history = useHistory();
  async function loginFormHandler(e) {
    e.preventDefault();
    const loginUserData = {
      email,
      password,
    };
    const res = await axios.post("/login", loginUserData);
    console.log(res);
    if (res.data.message === "Login successfully") {
      localStorage.setItem("accessToken", res.data.data.accessToken);
      localStorage.setItem("refreshToken", res.data.data.refreshToken);
      setConfirmationSnackbarMessage("Login Successfull!");
      setConfirmationSnackbarOpen(true);
      history.push("/");
      window.location.reload();
    } else {
      setConfirmationSnackbarMessage("Invalid email or password!");
      setConfirmationSnackbarOpen(true);
    }
    setAddClass("right-panel-active");
  }

  async function signFormHandler(e) {
    e.preventDefault();
    const signUserData = {
      username,
      phonenumber,
      address,
      email,
      password,
      scope: "user",
    };
    const res = await axios.post("/signup ", signUserData);
    console.log(res);
    if (res.data.message === "user created") {
      setConfirmationSnackbarMessage("Registered Successfully!");
      setConfirmationSnackbarOpen(true);
      window.location.reload();
    } else {
      setConfirmationSnackbarMessage("Something went wrong!");
      setConfirmationSnackbarOpen(true);
    }
  }

  return (
    <div className="Login">
      <div className={`login_container ${addClass}`} id="container">
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <div className="social-container">
              <a href="#">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <a className="my-2" href="/forget">
              Forgot your password?
            </a>
            <button className="sign_button" onClick={loginFormHandler}>
              Sign In
            </button>
          </form>
        </div>
        <div className="form-container sign-up-container">
          <form>
            <h1>Create Account</h1>
            <div className="social-container">
              <a href="#">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
            </div>
            <span>or use your email for registration</span>
            <input
              type="text"
              name="username"
              value={username}
              placeholder="Full Name"
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="tel"
              name="phonenumber"
              value={phonenumber}
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <input
              type="text"
              name="address"
              value={address}
              placeholder="Address"
              onChange={(e) => setAddress(e.target.value)}
              required
            />
            <button className="mt-2 sign_button" onClick={signFormHandler}>
              Sign Up
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                To keep connected with us please login with your personal info
              </p>
              <button
                className="ghost"
                id="signIn"
                onClick={() => setAddClass("")}
              >
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <button
                className="ghost"
                id="signUp"
                onClick={() => setAddClass("right-panel-active")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      <Snackbar
        confirmationSnackbarMessage={confirmationSnackbarMessage}
        confirmationSnackbarOpen={confirmationSnackbarOpen}
        setConfirmationSnackbarOpen={setConfirmationSnackbarOpen}
      />
    </div>
  );
}
export default Login;
