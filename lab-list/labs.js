// Labs Backend - methods
//
const fs = require('fs');
const filename = "test.json";
const csvToJson = require('convert-csv-to-json');

const fileInputName = 'extract.csv';

// Remove Labs - by ID
const removeLab = (id) => {
  const labs = loadLabs();
  const retainLabs = labs.filter((lab) => lab.id !== id)

  // Save only the labs not matching ID
  saveLabs(retainLabs);
}


// List Labs 
const listLab = () => {
  const labs = loadLabs();
  labs.filter((lab) => console.log('Lab ID: ' + lab.id + ' Name: ' +  lab.name));
}


// Read Labs - by ID
const readLab = (id) => {
  try {
    const labs = loadLabs();
    const findLab = labs.find((lab) => lab.id === id)

    console.log('Lab ID: ' + findLab.id);
    console.log('Name: ' + findLab.name);
  } catch (exception) {
    console.log('Lab not found');
  }
}

// CSV conversion to JSON
const csvLab = () => {
  try {
    csvToJson.fieldDelimiter(',').getJsonFromCsv(fileInputName);
    const csvData = csvToJson.getJsonFromCsv(fileInputName);
    saveLabs(csvData);
  } catch (exception) {
    console.log('Unable to convert file');
  }
}

const addLab = (id, name) => {
  const labs = loadLabs();

  // Dont allow duplicates
  const duplicationLab = labs.find((lab) => lab.id === id)

  // Only save unique Lab ID
  if (!duplicationLab) {
    console.log(labs);
    labs.push({
      id: id,
      name: name
    });

    saveLabs(labs);
  } else {
    console.log('Lab ID taken');
  }
}

// Save Labs - Array of Labs
const saveLabs = (labs) => {
  const dataJSON = JSON.stringify(labs);
  fs.writeFileSync('spl.json', dataJSON);
}


// Load Labs - Array of Labs
const loadLabs = () => {
  try {
    const dataBuffer = fs.readFileSync('spl.json');
    const dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (exception){
    // File doesnt exist - return an empty array
    return []
  }
}


// Exports to be called by external scripts
module.exports = {
  addLab: addLab,
  removeLab: removeLab,
  listLab: listLab,
  readLab: readLab,
  csvLab: csvLab
}
