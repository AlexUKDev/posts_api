const express = require("express");
const { router } = require("./router/index");
const app = express();

app.use(express.json());

app.use("/", router);

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ message: err.message });
});

// app.use("/", (req, res, next) => {
//   console.log("Hello from middleware");
//   next();
// });

// app.get("/", (req, res, next) => {
//   console.log("Hello 2");
// });

module.exports = {
  app,
};
