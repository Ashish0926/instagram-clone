const express = require("express");
const app = express();
const port = 3000;
const mongoose = require("mongoose");
const {MONGODB_URI} = require("../keys");
const router = require("./routes/auth")

app.use(express.json());
app.use(router);

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
