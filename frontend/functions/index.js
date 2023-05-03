/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
/* eslint-disable quotes */
const functions = require('firebase-functions');
const { defineString } = require('firebase-functions/params');

// Define ENV params
const printfulApi = defineString('PRINTFUL_API_TOKEN');

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// Gets entire store catalog
exports.catalog = functions.https.onRequest(async (req, res) => {
   const headersList = {
      Accept: '*/*',
      Authorization: `Bearer ${printfulApi.value()}`,
   };

   await fetch('https://api.printful.com/store/products', {
      method: 'GET',
      headers: headersList,
   })
      .then((resp) => {
         if (resp.status >= 200 && resp.status <= 300) {
            return Promise.resolve(resp.json());
         }
      })
      .then((data) => {
         res.json(data);
      });
});

// Gets items by category
exports.category = functions.https.onRequest(async (req, res) => {
   const headersList = {
      Accept: '*/*',
      Authorization: `Bearer ${printfulApi.value()}`,
   };

   await fetch(
      `https://api.printful.com/store/products?category_id=${req.params[0]}`,
      {
         method: 'GET',
         headers: headersList,
      },
   )
      .then((resp) => {
         if (resp.status >= 200 && resp.status <= 300) {
            return Promise.resolve(resp.json());
         }
      })
      .then((data) => {
         res.json(data);
      });
});

// Gets all printful categories
exports.categories = functions.https.onRequest(async (req, res) => {
   const headersList = {
      Accept: '*/*',
      Authorization: `Bearer ${printfulApi.value()}`,
   };

   await fetch('https://api.printful.com/store/categories', {
      method: 'GET',
      headers: headersList,
   })
      .then((resp) => {
         if (resp.status >= 200 && resp.status <= 300) {
            return Promise.resolve(resp.json());
         }
      })
      .then((data) => {
         res.json(data);
      });
});

// Gets product information
exports.product = functions.https.onRequest(async (req, res) => {
   const headersList = {
      Accept: '*/*',
      Authorization: `Bearer ${printfulApi.value()}`,
   };

   await fetch(`https://api.printful.com/store/products/${req.params[0]}`, {
      method: 'GET',
      headers: headersList,
   })
      .then((resp) => {
         if (resp.status >= 200 && resp.status <= 300) {
            return Promise.resolve(resp.json());
         }
      })
      .then((data) => {
         res.json(data);
      });
});

// Gets product information
exports.productTest = functions.https.onRequest(async (req, res) => {
   const headersList = {
      Accept: '*/*',
      Authorization: `Bearer ${printfulApi.value()}`,
   };

   await fetch(`https://api.printful.com/store/products/306499346`, {
      method: 'GET',
      headers: headersList,
   })
      .then((resp) => {
         if (resp.status >= 200 && resp.status <= 300) {
            return Promise.resolve(resp.json());
         }
      })
      .then((data) => {
         res.json(data);
      });
});

// place a new order
exports.order = functions.https.onRequest(async (req, res) => {
   const headersList = {
      'Accept': '*/*',
      'Authorization': `Bearer ${printfulApi.value()}`,
      'Content-Type': 'application/json',
   };

   const Body = {
      recipient: {
         name: req.body.name,
         address1: req.body.address1,
         city: req.body.city,
         state_code: req.body.state_code,
         country_code: req.body.country_code,
         zip: req.body.zip,
      },
      items: req.body.items,
   };

   console.log(Body);
   await fetch(`https://api.printful.com/orders`, {
      method: 'POST',
      headers: headersList,
   })
      .then((resp) => {
         if (resp.status >= 200 && resp.status <= 300) {
            return Promise.resolve(resp.json());
         }
      })
      .then((data) => {
         res.json(data);
      });
});
