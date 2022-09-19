const express = require("express");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

// middleware --> Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application's request-response cycle. These functions are used to modify req and res objects for tasks like parsing request bodies, adding response headers, etc.

const customMiddleware = (req, res, next) => {
  console.log("middleware executed");
  next();
};

// app.use(customMiddleware);

app.get("/home", customMiddleware, (req, res) => {
  console.log("home");
  res.send("hello world");
});
