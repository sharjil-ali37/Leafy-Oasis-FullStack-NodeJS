import React, {useState} from 'react';
import './Login.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faLock, faUser } from '@fortawesome/free-solid-svg-icons';



import {  signInWithEmailAndPassword   } from 'firebase/auth';
import { auth } from '../Firebase/Firebase';
import { NavLink, useNavigate } from 'react-router-dom'


import {  createUserWithEmailAndPassword  } from 'firebase/auth';


function Login() {

  const navigate = useNavigate();
    const [emailL, setEmailLogin] = useState('');
    const [passwordL, setPasswordLogin] = useState('');

    const [email, setEmailSignUp] = useState('');
    const [password, setPasswordSignUp] = useState('');
       
    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/")
            console.log(user);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage)
        });
       
    }



 
    const onSubmit = async (e) => {
      e.preventDefault()
     
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate("/login")
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
        });

    }


  return (
    <div className='Aa'>
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
                  <input id="email-address" name="email" type="email" required placeholder="Email address" 
                                    onChange={(e)=>setEmailLogin(e.target.value)}/>
                </div>
                <div className="input-box">
                  <FontAwesomeIcon icon={faLock} />
                  <input id="password" name="password" type="password" required placeholder="Password"
                                    onChange={(e)=>setPasswordLogin(e.target.value)}
                                />
                </div>
                <div className="text">
                  <a href="#">Forgot password?</a>
                </div>
                <div className="button input-box">
                  <input type="submit" value="Submit" onClick={onLogin}/>
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
                {/* <div className="input-box">
                  <FontAwesomeIcon icon={faUser} />
                  <input type="text" placeholder="Enter your name" required />
                </div> */}
                <div className="input-box">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <input
                                type="email"
                                label="Email address"
                                value={email}
                                onChange={(e) => setEmailSignUp(e.target.value)}  
                                required                                    
                                placeholder="Email address"                                
                            />
                </div>
                <div className="input-box">
                  <FontAwesomeIcon icon={faLock} />
                  <input
                                type="password"
                                label="Create password"
                                value={password}
                                onChange={(e) => setPasswordSignUp(e.target.value)} 
                                required                                 
                                placeholder="Password"              
                            />
                </div>
                <div className="button input-box">
                  <input type="submit" value="Submit" onClick={onSubmit} />
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
