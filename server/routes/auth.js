const express = require("express");
const { emit } = require("nodemon");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/user");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {JWT_KEY} = require("../../keys");
const requireLogin = require("../middleware/requireLogin");

router.get("/", (req, res) => {
  res.send("hello");
});

router.get("/protected", requireLogin, (req, res) => {
  res.send(`Hello user`);
})

router.post("/signup", (req, res) => {
  //console.log(req.body);
  const { name, email, password } = req.body;
  if (!email || !name || !password) {
    res.status(400).json({ error: "please add the fields" });
  }
  User.findOne({ email: email }).then((savedUser) => {
    if (savedUser) {
      return res.status(400).json("user already exists with this email ID");
    }
    // encrypt the user password
    bcrypt
      .hash(password, 12)
      .then((hashedPassword) => {
        // create a new user
        const user = new User({
          name,
          email,
          password: hashedPassword
        });

        // save user to the database
        user
          .save()
          .then((saved) => {
            res.json({ message: "user saved successfully" });
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  });
});

router.post("/signin", (req, res) => {
  const {email, password} = req.body;
  if(!email || !password){
    res.status(422).json({error: "please add email or password"});
  }
  User.findOne({email: email})
  .then(savedUser => {
    if(!savedUser){
      return res.json({message: "user does not exits in our database. Please signup to continue!"});
    }
    bcrypt.compare(password, savedUser.password)
    .then((doMatch) => {
      if(doMatch) {
        // res.json({message: "successfully signed in"});
        const token = jwt.sign({id: savedUser._id}, JWT_KEY);
        res.json({token: token});

      }else{
        res.json({message: "incorrect password"});
      }
    })
    .catch((err) =>{
      console.log(err);
    })
  })
  .catch((err) => {
    console.log(err);
  })
});

module.exports = router;
