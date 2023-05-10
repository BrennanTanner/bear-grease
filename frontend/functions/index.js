/* eslint-disable quote-props */
/* eslint-disable comma-dangle */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
/* eslint-disable indent */
/* eslint-disable quotes */
const functions = require('firebase-functions');
const { defineString } = require('firebase-functions/params');
const cors = require('cors');

const corsOptions = {
   origin: 'http://localhost:5173',
};

// Define ENV params
const printifyApi = defineString('PRINTIFY_API_TOKEN');
const URL = 'https://api.printify.com/v1/shops/3646692';


// Gets entire store catalog
exports.catalog = functions.https.onRequest((req, res) => {
   const headersList = {
      Accept: '*/*',
      Authorization: `Bearer ${printifyApi.value()}`,
   };

   cors(corsOptions)(req, res, async () => {
      await fetch(`${URL}/products.json?limit=10&${req.params.page}`, {
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
});

// Gets items by category
exports.category = functions.https.onRequest((req, res) => {
   const headersList = {
      Accept: '*/*',
      Authorization: `Bearer ${printifyApi.value()}`,
   };

   cors(corsOptions)(req, res, async () => {
      await fetch(`${URL}/products.json`, {
         method: 'GET',
         headers: headersList,
      })
         .then((resp) => {
            if (resp.status >= 200 && resp.status <= 300) {
               return Promise.resolve(resp.json());
            }
         })
         .then((data) => {
            data.data = data.data.map((item)=>{
               if (item.tags.includes(req.params.tags)) return item;
            });
            res.json(data);
         });
   });
});

// Get a single item
exports.product = functions.https.onRequest((req, res) => {
   const headersList = {
      Accept: '*/*',
      Authorization: `Bearer ${printifyApi.value()}`,
   };
   cors(corsOptions)(req, res, async () => {
      await fetch(`${URL}/products/${req.params[0]}.json`, {
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
});

// post a new order
exports.newOrder = functions.https.onRequest((req, res) => {
   const headersList = {
      Accept: '*/*',
      Authorization: `Bearer ${printifyApi.value()}`,
      'Content-Type': 'application/json',
   };

   const bodyContent = {
      external_id: req.body.external_id,
      label: req.body.label,
      line_items: req.body.line_items,
      shipping_method: req.body.shipping_method,
      send_shipping_notification: false,
      address_to: req.body.address_to
   };

   cors(corsOptions)(req, res, async () => {
      await fetch(`${URL}/orders.json`, {
         method: 'POST',
         body: bodyContent,
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
});

// Calculate Shipping
exports.shipping = functions.https.onRequest((req, res) => {
   const headersList = {
      Accept: '*/*',
      Authorization: `Bearer ${printifyApi.value()}`,
      'Content-Type': 'application/json',
   };

   const bodyContent = {
      line_items: req.body.line_items,
      address_to: req.body.address_to
   };

   cors(corsOptions)(req, res, async () => {
      await fetch(`${URL}/orders/shipping.json`, {
         method: 'POST',
         body: bodyContent,
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
});

// place an order
exports.placeOrder = functions.https.onRequest((req, res) => {
   const headersList = {
      Accept: '*/*',
      Authorization: `Bearer ${printifyApi.value()}`,
   };

   cors(corsOptions)(req, res, async () => {
      await fetch(`${URL}/orders/${req.params[0]}/send_to_production.json`, {
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
});

// Cancel an order
exports.cancelOrder = functions.https.onRequest((req, res) => {
   const headersList = {
      Accept: '*/*',
      Authorization: `Bearer ${printifyApi.value()}`,
   };

   cors(corsOptions)(req, res, async () => {
      await fetch(`${URL}/orders/${req.params[0]}/cancel.json`, {
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
});
