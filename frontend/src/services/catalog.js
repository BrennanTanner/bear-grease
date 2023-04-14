async function getCatalog(req) {
   let headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json',
      Authorization: 'Bearer uxF5S5OmEfq3CR77OnyreEgJQJ9Q7a7D28Swqu36',
   };

   let headers = {
      Accept: '*/*',
   };
   console.log('hi');
   const res = await fetch('https://pokeapi.co/api/v2/pokemon');

   console.log(res.json());
   const resjson = 'hi';

   return resjson;
}

export { getCatalog };
