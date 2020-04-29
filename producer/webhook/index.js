/**
 * Name: webhook
 * Description: Stub functionality to test json message passing
 *
 * Google Cloud Function
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
const fs=require('fs');
const {Storage}   = require('@google-cloud/storage');
const storage = new Storage();

// Ensure you have write permissions to the bucket
// const bucketname = "[CLOUD STORAGE BUCKET]";

// Perform the upload
async function uploadFile(bucketname, filename){
  await storage.bucket(bucketname).upload(filename);
}


// Cloud function entry point
exports.webhook = async (req, res) => {
  let message = req.body || 'Event body is empty...';

  let jsonMessage = JSON.stringify(message);
  console.log('json: ' + jsonMessage);

  let obj = JSON.parse(jsonMessage);
  console.log('Object: ' + obj.labId);
  let filename = '/tmp/' + obj.labId + '.json';

  // Write the lab report to the storage
  // Strictly speaking it should write it to Pubsub - 
  // then have the json consumed by a consumer services CSV/JSON/BQ etc
  // 1. Download an existing file from cloud storage or create empty object if no file present on /tmp
  // 2. Merge the list
  // 3. Write it to /tmp directory
  // 4. upload the updated filelist

  fs.writeFileSync(filename, jsonMessage);
//  await uploadFile(bucketname, filename);

  console.log(message)
  res.status(200).send(message);
};

