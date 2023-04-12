async function getCatalog(req) {
   let headersList = {
      Accept: '*/*',
      'Access-Control-Allow-Credentials': true,
      'Content-Type': 'application/json',
      Authorization: 'Bearer uxF5S5OmEfq3CR77OnyreEgJQJ9Q7a7D28Swqu36',
   };

   let headers = {
      'Access-Control-Allow-Credentials': true,
      mode: 'no-cors'
   };
   console.log('hi');
   const res = await fetch('https://api.printful.com/products', { headers });

   console.log(res.json());
   const resjson = 'hi';

   return resjson;
}

export { getCatalog };
