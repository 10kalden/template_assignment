const express = require("express");
const path = require("path");
const app = express();
const data_arr = [];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.use(express.urlencoded({ extended: false }));

app.post("/confirmation", (req, res) => {
  data_arr.push(req.body);
  res.send("Your Name has been registered");
});

app.get("/name", (req, res) => {
  console.log(data_arr);
  res.send(data_arr);
});

app.listen(3000, () => console.log("server running on port 3000"));
