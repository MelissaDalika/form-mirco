const express = require("express");
const path = require("path");
const app = express();

app.use(express.json())
app.use(express.static("./views"));
app.use(express.static("./assets"));

app.get("/form", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "/views/myform.html"));
});

app.get("/page", (req, res) => {
  res.status(200).sendFile(path.join(__dirname, "/views/formpage.html"));
});

app.post("/submit",(req, res) => {
  //res.send(req.body);
  res.send();
  console.log(req.body);
});




app.listen(3000, () => console.log("Listening on port 3000"));