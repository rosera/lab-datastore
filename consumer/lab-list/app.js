const fs = require('fs');
const yargs = require('yargs');
const csvToJson = require('convert-csv-to-json');
const fileInputName = 'extract.csv'; 
const labs = require('./labs.js');


yargs.version('1.0.0');

// Add
// id: identifier
// name: Name of the lab
// 
yargs.command ({
  command:  'add',
  describe: 'Add a lab',
  builder: {
    id: {
      describe: 'Lab ID',
      demandOption: true,
      type: 'string'
    },
    name: {
      describe: 'Name of Lab',
      demandOption: true,
      type: 'string'
    }
  },
  handler (argv) {
    labs.addLab(argv.id, argv.name);
  }
});

// Remove
// id: identifier
// 
yargs.command ({
  command: 'remove',
  describe: 'Remove lab',
  builder: {
    id: {
      describe: 'Lab ID',
      demandOption: true,
      type: 'string'
    }
  },
  handler (argv) {
    labs.removeLab(argv.id);
  }
});


// List
// 
yargs.command ({
  command: 'list',
  describe: 'List labs',
  handler (argv) {
    labs.listLab();
  }
});


// CSV
// 
yargs.command ({
  command: 'csv',
  describe: 'Convert csv to json labs',
  handler (argv) {
    labs.csvLab();
  }
});

// Read
// id: identifier
// 
yargs.command ({
  command: 'read',
  describe: 'Read lab',
  builder: {
    id: {
      describe: 'Lab ID',
      demandOption: true,
      type: 'string'
    }
  },
  handler (argv) {
    labs.readLab(argv.id);
  }
});

// Call parse to perform command line check
yargs.parse()
