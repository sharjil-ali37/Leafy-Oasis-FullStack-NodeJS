import React from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';

function Login() {
  return (
    <div className='A'>
    <div className="container1">
      <input type="checkbox" id="flip" />
      <div className="cover">
        <div className="front"></div>
        <div className="back"></div>
      </div>
      <div className="forms">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
            <form action="#">
              <div className="input-boxes">
                <div className="input-box">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <input type="text" placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                  <FontAwesomeIcon icon={faLock} />
                  <input type="password" placeholder="Enter your password" required />
                </div>
                <div className="text">
                  <a href="#">Forgot password?</a>
                </div>
                <div className="button input-box">
                  <input type="submit" value="Submit" />
                </div>
                <br />
                <button className="social-signin google">Log in with Google+</button>
                <div className="text sign-up-text">
                  Don't have an account? <label htmlFor="flip">Signup now</label>
                </div>
              </div>
            </form>
          </div>
          <div className="signup-form">
            <div className="title">Signup</div>
            <form action="#">
              <div className="input-boxes">
                <div className="input-box">
                  <FontAwesomeIcon icon={faUser} />
                  <input type="text" placeholder="Enter your name" required />
                </div>
                <div className="input-box">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <input type="text" placeholder="Enter your email" required />
                </div>
                <div className="input-box">
                  <FontAwesomeIcon icon={faLock} />
                  <input type="password" placeholder="Enter your password" required />
                </div>
                <div className="button input-box">
                  <input type="submit" value="Submit" />
                </div>
                <div className="text sign-up-text">
                  Already have an account? <label htmlFor="flip">Login now</label>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    </div>
  );
}
// document.getElementsByTagName("h1")[0].style.fontSize = "6vw";

export default Login;
