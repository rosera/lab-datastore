const data = require('./data/labs.json');
const pug = require('pug');


// Show page to be rendered
function asyncRenderPage(req, res) {
  const pugFile = pug.compileFile('views/index.pug');

  console.log(`data: ${data.spls}`);
  res.status(200).send(pugFile({
	  labs: data
  }));
}

exports.labAPI=(req, res)=>{
  console.log(`Hello from labAPI`);
  asyncRenderPage(req, res);
};
