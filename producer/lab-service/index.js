// Name: index.js
// Description: Opens a port
// 
const app = require('./app.js');
const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`Lab Service listening on port ${PORT}`)
);
