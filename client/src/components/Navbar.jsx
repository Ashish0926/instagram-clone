import React from "react";
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to="/" className="brand-logo left">
          Instagram
        </Link>
        <ul id="nav-mobile" className="right">
          <li>
            <Link to="/signup">SIGNUP</Link>
          </li>
          <li>
            <Link to="/login">LOGIN</Link>
          </li>
          <li>
            <Link to="/profile">PROFILE</Link>
          </li>
          <li>
            <Link to="/createPost">CREATE POST</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
