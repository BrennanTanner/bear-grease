const functions = require("firebase-functions");
// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

exports.helloWorld = functions.https.onRequest((req, res) => {
  functions.logger.info("Hello logs!", {structuredData: true});
});

exports.catalog = functions.https.onRequest(async (req, res) => {
  const headersList = {
    Accept: "*/*",
    Authorization: "Bearer bqnqQTtPBz3rCOUwWR3uKg93NOgoKOEja87q7GQW",
  };

  const response = await fetch("https://api.printful.com/store/products", {
    method: "GET",
    headers: headersList,
  });
  const catalog = await response.json();
  console.log(catalog);
  if (!catalog) {
    return res.sendStatus(404);
  }
  res.json(catalog);
});
