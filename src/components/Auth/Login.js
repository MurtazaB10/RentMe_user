import "./Login.css";
import "../../../node_modules/font-awesome/css/font-awesome.min.css";
import React, { useState } from "react";

function Login() {
  const [addClass, setAddClass] = useState("");
  return (
    <div className="Login">
      <div className={`login_container ${addClass}`} id="container">
        <div className="form-container sign-in-container">
          <form>
            <h1>Sign in</h1>
            <div class="social-container">
              <a href="#">
                <i className="fa fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a className="my-2" href="#">
              Forgot your password?
            </a>
            <button className="sign_button">Sign In</button>
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
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="mt-2 sign_button">Sign Up</button>
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
    </div>
  );
}
export default Login;
