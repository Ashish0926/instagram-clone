const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const {MONGODB_URI} = require("../keys");
const auth_route = require("./routes/auth");
const post_route = require("./routes/post");

require("./models/user");
require("./models/post");

app.use(express.json());
app.use(auth_route);
app.use(post_route);

mongoose.connect(MONGODB_URI)
.then((db) => {
    console.log("db connected!");
})
.catch((err) => {
    console.log(err);
})

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
