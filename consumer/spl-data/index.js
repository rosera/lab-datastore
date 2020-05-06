const express = require('express');
const labdata = require('./data/details.json');
const data = require('./data/labs.json');
const path = require('path');
const pug = require('pug');
const app = express();

const port = process.env.PORT || 8080;

app.set('views', './views');
app.set('view engine', 'pug');
app.use("/public", express.static(path.join(__dirname, 'public')));


// Show the HOME page

app.get('',(req,res) => {

  let pageRef = req.query.lab || '0';

  console.log(pageRef);

  if (pageRef === "0") {

    res.render('index', {
      labs: data 
    });
  } else {
    res.render('lab', {
      lab:labdata[0],
      name: pageRef
    });
  }
});


// Show the Details page
app.get('/', (req,res) => {
  res.render('lab', {
      lab:labdata[0],
      name: pageRef
  });
});


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
