const functions = require("firebase-functions");
const handlers = require("./handlers");

exports.get_data = functions.https.onCall((data, context) => {
  return JSON.stringify(data);
});
