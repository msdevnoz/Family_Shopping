import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import './Css/LoginSignUp.css';

export const LoginSignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" id="name" placeholder="Your Name..." />
          <input type="email" id="email" placeholder="Your Email..." />
          <div className="password-input-container">
            <input type={passwordVisible ? 'text' : 'password'} id="password" placeholder="Your Password..." />
            <div className="eye-icon" onClick={togglePasswordVisibility}>
              <FontAwesomeIcon icon={passwordVisible ? faEye : faEyeSlash} />
            </div>
          </div>
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">
          Already have an account? <span>Login here</span>
        </p>
        <div className="loginsignup-agree">
          <input type="checkbox" id="agree" />
            By continuing, I agree to the terms of use & privacy policy

        </div>
      </div>
    </div>
  );
};
