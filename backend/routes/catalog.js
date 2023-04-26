const Catalog = require('express').Router();

Catalog.get('/', async (req, res) => {
   let headersList = {
      "Accept": "*/*",
      "Authorization": "Bearer bqnqQTtPBz3rCOUwWR3uKg93NOgoKOEja87q7GQW"
     }
     
     let response = await fetch("https://api.printful.com/store/products", { 
       method: "GET",
       headers: headersList
     });
     
     let data = await response.text();
     console.log(data);
});

module.exports = Catalog;