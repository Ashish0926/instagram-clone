import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  function signup() {
    if(!name || !email || !password || !confirm){
      M.Toast.dismissAll();
      M.toast({html: 'All fields are mandatory', classes: 'rounded red'})
      return;
    }
    if(!validateEmail(email)){
      M.Toast.dismissAll();
      M.toast({html: 'Invalid email id', classes: 'rounded red'})
      return;
    }
    if(password !== confirm){
      M.Toast.dismissAll();
      M.toast({html: 'Confirm password does not match.', classes: 'rounded red'})
      return;
    }

    axios.post('http://localhost:3000/signup', {
      // Add parameters here
      name,
      email,
      password
    })
    .then((res) => {
      M.Toast.dismissAll();
      M.toast({html: 'User saved successfully.', classes: 'rounded green'})
      //console.log(response.data);
        // Handle data
    })
    .catch((error) => {
      console.log(error);
      M.Toast.dismissAll();
      M.toast({html: error.response.data, classes: 'rounded red'})
    })
  };

  return (
    <div>
      <div className="card auth-card">
        <h2 className="insta">Instagram</h2>
        <div className="input-field">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
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
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirm}
            onChange={(e) => {
              setConfirm(e.target.value);
            }}
          />
        </div>

        <a className="waves-effect waves-light btn-large login-btn black" onClick={() => {
          signup();
        }}>
          Sign-up
        </a>
        <h6 id="have-account">
          Already have an account?{" "}
          <Link id="to-login" to="/login">
            Login
          </Link>
        </h6>
      </div>
    </div>
  );
};

export default Signup;
