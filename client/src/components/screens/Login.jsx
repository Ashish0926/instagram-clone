import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../App";
import axios from "axios";

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Login = () => {
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function login() {
    if (!email || !password) {
      M.Toast.dismissAll();
      M.toast({ html: "All fields are mandatory", classes: "rounded red" });
      return;
    }
    if (!validateEmail(email)) {
      M.Toast.dismissAll();
      M.toast({ html: "Invalid email id", classes: "rounded red" });
      return;
    }

    axios
      .post("http://localhost:3000/signin", {
        // Add parameters here
        email,
        password,
      })
      .then((res) => {
        M.Toast.dismissAll();
        M.toast({ html: "login successful", classes: "rounded green" });
        // console.log(res.data.token);
        console.log(res.config);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.config.data));
        dispatch({ type: "USER", payload: res.config.data });

        navigate("/");
        //console.log(res);
      })
      .catch((error) => {
        console.log(error);
        M.Toast.dismissAll();
        M.toast({ html: "error logging in", classes: "rounded red" });
      });
  }

  return (
    <div>
      <div className="card auth-card">
        <h2 className="insta">Instagram</h2>
        <div className="input-field">
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>

        <a
          className="waves-effect waves-light btn-large login-btn black"
          onClick={login}
        >
          Login
        </a>
        <h6 id="have-account">
          Do not have an account?{" "}
          <Link id="to-login" to="/signup">
            Signup
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default Login;
