import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Navbar = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const renderList = () => {
    if (state) {
      return [
        <li>
          <Link className="waves-effect waves-light btn white"
          style={{borderRadius: "20px"}} to="/profile">PROFILE</Link>
        </li>,
        <li>
          <Link className="waves-effect waves-light btn white"
          style={{borderRadius: "20px"}} to="/createPost">CREATE POST</Link>
        </li>,
        <li>
          <a className="waves-effect waves-light btn white"
          style={{borderRadius: "20px"}} onClick={() => {
            localStorage.clear();
            dispatch({type: "CLEAR"})
            navigate("/login");
          }}><i className="material-icons right">exit_to_app</i>LOGOUT</a>
        </li>,
      ];
    } else {
      return [
        <li>
          <Link className="waves-effect waves-light btn white"
          style={{borderRadius: "20px"}} to="/signup">SIGNUP</Link>
        </li>,
        <li>
          <Link className="waves-effect waves-light btn white"
          style={{borderRadius: "20px"}} to="/login">LOGIN</Link>
        </li>,
      ];
    }
  };
  return (
    <nav>
      <div className="nav-wrapper white">
        <Link to={state ? "/" : "/login"} className="brand-logo left">
          Instagram
        </Link>
        <ul id="nav-mobile" className="right">
          {renderList()}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
