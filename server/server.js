require("dotenv").config();
const express = require("express");

const app = express();

const port = process.env.PORT || 3200;

app.use("/", (req, res) => {
  res.send("Express + TypeScript");
});

const start = async () => {
  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
};

start()