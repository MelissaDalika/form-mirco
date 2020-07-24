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

app.get("/submit", (req, res) => {
  //res.send(req.body);
  res.send();
  console.log(req.body);
});

app.post("/submit", (req, res) => {
  //res.send(req.body);
  res.send();
  console.log(req.body);
});

/*

//INPUT RADIO BUTTONS

function getRadioVal() {
  let selectedRadioValue;
  // get list of radio buttons with specified name
  let radiosArr = document.getElementsByClassName("radioInput");

  // loop through list of radio buttons
  for (let i = 0; i < radiosArr.length; i++) {
    if (radiosArr[i].checked) {
      // radio checked?
      console.log("getRadioVal sta andando");
      selectedRadioValue = document.getElementById(`answer${i}label`).innerText; // if so, hold its value in val
      break; // and break out of for loop
    }
  }
  return selectedRadioValue; // return value of checked radio or undefined if none checked
}

getRadioVal()

//Bottone Submit form
document.getElementById("ConfirmData").addEventListener("click", () => {
  document.getElementById("formName").classList.toggle('d-none');
  document.getElementById("formName").classList.toggle('d-flex');
  document.getElementById("optionSelection").classList.toggle('d-none');
});

//Chiamata POST 
function postData(name, email, tickets, datein, dateout) {
  var data = JSON.stringify({
    "name": name,
    "email": email,
    "tickets": tickets,
    "datein": datein,
    "dateout": dateout
  });
}

// NATIONALITY

let nationalityList;

app.get("/nationlist", (req, res) => {
  res.json(nacionalitylist)
})

axios
  .get("/nationlist")
  .then()

*/

app.listen(4000, () => console.log("Listening on port 4000"));