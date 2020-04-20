const labdata = require('./data/gsp001.json');
const data = require('./data/labs.json');
const pug = require('pug');



// Show page to be rendered
function labRenderPage(req, res) {
  const pugFile = pug.compileFile('views/lab.pug');

  res.status(200).send(pugFile({
	  lab: labdata[0]
  }));
}



// Show page to be rendered
function asyncRenderPage(req, res) {
  const pugFile = pug.compileFile('views/index.pug');

  res.status(200).send(pugFile({
	  labs: data
  }));
}

exports.labAPI=(req, res)=>{
  let pageRef = req.query.lab || '0';

  console.log(pageRef);

  if (pageRef === "gsp001") {
    // Show a lab page
    labRenderPage(req, res);
    console.log("Calling lab");
  } else {
    // Show the home page
    console.log(`Hello from labAPI`);
    asyncRenderPage(req, res);
  }
};
