const Catalog = require('express').Router();

Catalog.get('/', async (req, res) => {
   let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)",
      "Authorization": "Bearer uxF5S5OmEfq3CR77OnyreEgJQJ9Q7a7D28Swqu36"
     }
     
     let response = await fetch("https://api.printful.com/products", { 
       method: "GET",
       headers: headersList
     });
     
     let data = await response.text();
     console.log(data);
});

module.exports = Catalog;