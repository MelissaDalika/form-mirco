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

/*
//VALIDATE USERNAME AND EMAIL
const submitBtn = document.getElementById('submit-btn');

const validate = (e) => {
  e.preventDefault();
  const username = document.getElementById('username');
  const emailAddress = document.getElementById('email-address');
  if (username.value === "") {
    alert("Please enter your username.");
    username.focus();
    return false;
  }
    
  if (emailAddress.value === "") {
    alert("Please enter your email address.");
    emailAddress.focus();
    return false;
  }

  if (!emailIsValid(emailAddress.value)) {
    alert("Please enter a valid email address.");
    emailAddress.focus();
    return false;
  }
  
  return true; // Can submit the form data to the server
}

const emailIsValid = email => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

submitBtn.addEventListener('click', validate);
*/

app.listen(3000, () => console.log("Listening on port 3000"));