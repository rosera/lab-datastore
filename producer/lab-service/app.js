// Name: app.js
// Description: Read a Cloud PubSub message and pass info to a remote webhook
// Parameters:
// WEBHOOK_URL: remote webhook
// LAB_ID: Label the message item
//
const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const WEBHOOK_URL = process.env.WEBHOOK_URL || '';
const LAB_ID = process.env.LAB_ID || '';

app.use(bodyParser.json());

app.post('/', (req, res) => {
  try {
    const pubSubMessage = req.body.message;
    const payload = pubSubMessage.data
      ? JSON.parse(Buffer.from(pubSubMessage.data, 'base64').toString()) : '';

    if (payload != '') {
      const instanceName = payload.protoPayload.request.name;
      const machineType = parseString(payload.protoPayload.request.machineType, 5);
      const zone = parseString(payload.protoPayload.response.zone, 8);
      const startTime = parseISODate(payload.protoPayload.response.startTime);
      const diskSize = payload.protoPayload.request.disks[0].initializeParams.diskSizeGb;
      const diskType = parseString(payload.protoPayload.request.disks[0].initializeParams.diskType, 5);
      const sourceImage = parseString(payload.protoPayload.request.disks[0].initializeParams.sourceImage, 4);

      // Create an object to pass a json string containing the information required
      eventBody = {
        'labId': LAB_ID,        
        'instanceName': instanceName,
        'machineType': machineType,
        'zone': zone,
        'startTime': startTime,
        'diskGb': diskSize,
        'diskType': diskType,
        'sourceImg': sourceImage,
      };

      // Post a message to the webhook
      request.post(WEBHOOK_URL, {
        json: eventBody,
      }, (err, res, body) => {
        if (err) {
          console.error('Post Message Error');
          return;
        }
        console.log(`statusCode: ${res.statusCode}`);
      });
    }
  } catch (err) {
    console.log(err);
  }
  res.status(204).send();
});

// Parse the info to remove unnecessary information
function parseString(strToParse, index) {
  let result = strToParse.split("/");
  return (result[index]);
}

// Parse the info to remove unnecessary information
function parseISODate(stringToParse) {
  return stringToParse.substring(0,10);
}

module.exports = app;
