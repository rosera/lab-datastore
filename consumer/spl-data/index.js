const labdata = require('./data/details.json');
const data = require('./data/labs.json');
const express = require('express');
const path = require('path');
const pug = require('pug');
const app = express();

// Initialise port
const port = process.env.PORT || 8080;

// Pug setup
app.set('views', './views');
app.set('view engine', 'pug');
app.use("/public", express.static(path.join(__dirname, 'public')));

// Show the HOME page
app.get('',(req,res) => {
  let pageRef = req.query.lab || '0';

  if (pageRef === "0") {
    // Render the Home page
    res.render('index', {
      labs: data 
    });
  } else {
    // Render the Lab detail page
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


app.listen(port, () => console.log(`Listening on:${port}`))
