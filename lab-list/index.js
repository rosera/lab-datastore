const csvToJson = require('convert-csv-to-json');
const fileInputName = 'extract.csv'; 

function createJSON() {
  let data = "";

  csvToJson.fieldDelimiter(',') .getJsonFromCsv(fileInputName);

  const json = csvToJson.getJsonFromCsv(fileInputName);
  const jsonObj = JSON.stringify(json);

  console.log(`{`);
  console.log(`"spls": [`);

//  data = "{\n";
//  data = data + '"spls": [\n'

  const MAX = (json.length -1);

  for (var i=0; i < json.length; i++) {
    if (MAX === i) {
      console.log(JSON.stringify(json[i]));
//      data = data + (JSON.stringify(json[i]) + "\n");
    }
    else {
      console.log(JSON.stringify(json[i]) + ",");
//      data = data + (JSON.stringify(json[i]) + ",\n");
    }
  }

  console.log(`]`);
  console.log(`}`);

//  data = data + "]\n";
//  data = data + "}";

//  return data;
}

createJSON();
