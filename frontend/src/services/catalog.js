async function getCatalog(req) {
   let headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: 'Bearer bqnqQTtPBz3rCOUwWR3uKg93NOgoKOEja87q7GQW',
   };

   let headers = {
      Accept: '*/*',
   };
   const res = await fetch('https://api.printful.com/store/products');

   const resjson = await res.json();

   return resjson;
}

export { getCatalog };
