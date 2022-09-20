const express = require("express");
const { emit } = require("nodemon");
const router = express.Router();
const mongoose = require("mongoose");
require("../models/user");
const User = mongoose.model("User");

router.get("/", (req, res) => {
    res.send("hello");
});

router.post("/signup", (req, res) => {
    //console.log(req.body);
    const {name, email, password} = req.body;
    if(!email || !name || !password){
        res.status(400).json({error: "please add the fields"});
    }
    User.findOne({email: email})
    .then((savedUser) => {
        if(savedUser){
            return res.status(400).json("user already exists with this email ID");

        }
        // create a new user
        const user = new User({
            name,
            email,
            password
        });

        // save user to the database
        user.save()
        .then((saved) => {
            res.json({message: "user saved successfully"});
        })
        .catch((err) => {
            console.log(err);
        })
    })
    .catch((err) => {
        console.log(err);
    })
});

module.exports = router;