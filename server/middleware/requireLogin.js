const jwt = require("jsonwebtoken");
const { JWT_KEY } = require("../../keys");
const mongoose = require("mongoose");
const User = mongoose.model("User");

// module.exports is a special object in ever nodejs file by default that exposes anything that is assigned to it.

module.exports = (req, res, next) => {
    const { authorization } = req.headers
    if(!authorization){
        res.status(401).json({error: "you must login"});
    }
    // authorization === "Bearer TOKEN_STRING"
    const token = authorization.replace("Bearer ", "");
    jwt.verify(token, JWT_KEY, (err, payload) => {
        if(err){
            return res.status(401).json({error: "you must login"});
        }
        const {_id} = payload;
        User.findById(_id).then((userData) => {
            req.user = userData;
        })
        next();
    })
}