//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const port = 3005;
const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.use(express.json());


app.get("/", function (req, res) {
  //variables
  var Year=Date().getYear();
  res.render("index", {Year: Year  });
  
  
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})