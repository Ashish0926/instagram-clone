import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <div className="card auth-card">
        <h2 className="insta">Instagram</h2>
        <div className="input-field">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
        </div>

        <a className="waves-effect waves-light btn-large login-btn black">
          Sign-up
        </a>
        <h6 id="have-account">Already have an account? <Link id="to-login" to="/login">Login</Link></h6>
      </div>
    </div>
  );
};

export default Signup;
