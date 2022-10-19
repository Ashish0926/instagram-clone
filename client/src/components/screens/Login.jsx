import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="card auth-card">
        <h2 className="insta">Instagram</h2>
        <div className="input-field">
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
        </div>

        <a className="waves-effect waves-light btn-large login-btn black">
          Login
        </a>
        <h6 id="have-account">Do not have an account? <Link id="to-login" to="/signup">Signup</Link></h6>

      </div>
    </div>
  );
};

export default Login;
