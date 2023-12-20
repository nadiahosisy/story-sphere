import React, { useState } from 'react';
import './style.css';
export const Register = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, pass);
  };

  return (
    <div className="form-container ">
      <div className="auth-form-container">
        <h2 className="form-header">Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <label htmlFor="email">email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Please Enter Email!"
            id="email"
            name="email"
            required
          />
          <label htmlFor="password">password</label>
          <input
            value={pass}
            onChange={(e) => setPass(e.target.value)}
            type="password"
            placeholder="Please Enter Password!"
            id="password"
            name="password"
            required
            minLength="4"
          />
          <button className="btn" type="submit">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
export default Register;
