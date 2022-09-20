const express = require("express");
const { emit } = require("nodemon");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("hello");
});

router.post("/signup", (req, res) => {
    //console.log(req.body);
    const {name, email, password} = req.body;
    if(!email || !name || !password){
        res.status(400).json({error: "please add the fields"});
    }
    res.json({message: "successfully posted"});
});

module.exports = router;