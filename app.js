const express = require("express");
const fs = require("fs");
const cors = require("cors");

const app = express();

let data;

fs.readFile("./app.json", "utf-8", (err, jsonString) => {
  if (err) console.log(error);
  data = JSON.parse(jsonString);
});

app.use(cors());

app.get("/characters", (req, res) => {
  res.send(data);
});

app.get("/characters/:id", (req, res) => {
  let id = req.params.id;
  const index = data.findIndex((d) => d.id == id);
  if (index == -1) {
    res.status(404).send({ msg: "Invalid Character" });
  }
  res.send(data[index]);
});

app.listen(5000, console.log(`Server started at 3000`));
