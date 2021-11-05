import React, { useState } from 'react';
import axios from 'axios';
import './Register.css';

function Register() {
  const [emailReg, setEmailReg] = useState('');
  const [passwordReg, setPasswordReg] = useState('');
  console.log(emailReg, passwordReg);

  const register = () => {
    axios.post(`${process.env.REACT_APP_BACKEND_URL}/user`).then((response) => {
      console.log(response);
    });
  };

  return (
    <div className="authentification">
      <div className="registration">
        <h1>Registration</h1>
        <label htmlFor="email">
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => {
              setEmailReg(e.target.value);
            }}
          />
        </label>
        <label htmlFor="password">
          <input
            type="text"
            placeholder="Password"
            onChange={(e) => {
              setPasswordReg(e.target.value);
            }}
          />
        </label>
        <button type="button" onClick={register}>
          Register
        </button>
      </div>
      <div className="line" />
      <div className="login">
        <h1>Login</h1>
        <label htmlFor="email">
          <input type="text" placeholder="Email" />
        </label>
        <label htmlFor="password">
          <input type="text" placeholder="Password" />
        </label>
        <button type="button">Login</button>
      </div>
    </div>
  );
}

export default Register;
