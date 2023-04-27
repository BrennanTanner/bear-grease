/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
/* eslint-disable quotes */
const functions = require('firebase-functions');

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started
// delete this
exports.helloWorld = functions.https.onRequest((req, res) => {
   functions.logger.info('Hello logs!', { structuredData: true });
});

// call printfull api
exports.catalog = functions.https.onRequest(async (req, res) => {
   const headersList = {
      Accept: '*/*',
      Authorization: 'Bearer bqnqQTtPBz3rCOUwWR3uKg93NOgoKOEja87q7GQW',
   };

   await fetch('https://api.printful.com/store/products', {
      method: 'GET',
      headers: headersList,
   })
      .then((resp) => {
         if (resp.status >= 200 && resp.status <= 300) {
            console.log('hi');
            return Promise.resolve(resp.json());
         }
      })
      .then((data) => {
         console.log(data);
      });

   // const catalog = await res.json();
   // if (!catalog) {
   //   return res.sendStatus(404);
   // }
   // res.json(catalog);
});
