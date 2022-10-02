require("../models/post");
const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const requireLogin = require("../middleware/requireLogin");
const Post = mongoose.model("Post");

router.get("/allpost", (req, res) => {
  Post.find()
    .populate("postedBy", "_id name")
    .then((posts) => {
      res.json({ posts });
    })
    .catch((err) => {
      console.log(err);
    });
});

router.post("/createPost", requireLogin, (req, res) => {
  const { title, body } = req.body;
  if (!title || !body) {
    res.json({ error: "Please add all the fields" });
  }
  //console.log(req.user);
  res.send("Ok");

  const post = new Post({
    title: title,
    body: body,
    postedBy: req.user,
  });

  post
    .save()
    .then((savedPost) => {
      //res.json({post: savedPost});
      console.log(savedPost);
    })
    .catch((err) => {
      console.log(err);
    });
});

router.get("/myposts", requireLogin, (req, res) => {
    Post.find({postedBy: req.user._id})
    .populate("postedBy", "_id name")
    .then(posts => {
        res.send(posts);
    })
    .catch(err => {
        console.log(err);
    })
});

module.exports = router;
