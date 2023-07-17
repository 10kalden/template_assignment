const express = require("express");
const path = require("path");
const app = express();
const data_arr = [];

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.use(express.urlencoded({ extended: false }));

app.post("/confirmation", (req, res) => {
  const { name } = req.body;
  data_arr.push(name);
  res.send("Your Name has been registered");
});

app.get("/name", (req, res) => {
  console.log(data_arr);
  res.send(data_arr);
});

app.get("/name/:id", (req, res) => {
  const { id } = req.params;
  console.log(data_arr[id]);
  res.send("Data printed in console!");
});

app.listen(4000, () => console.log("server running on port 4000"));
