async function getCatalog(req) {
   var URL = `${import.meta.env.VITE_FUNCTIONS_URL}/catalog`;

   if (req.params.category) {
      URL = `${import.meta.env.VITE_FUNCTIONS_URL}/category/${
         req.params.category
      }`;
   }

   let headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json',
   };

   const res = await fetch(URL, {
      method: 'GET',
      headers: headersList,
   });

   const resjson = await res.json();
   return resjson;
}

async function getItem(req) {
   var URL = `${import.meta.env.VITE_FUNCTIONS_URL}/product/${req.params.id}`;

   let headersList = {
      Accept: '*/*',
      'Content-Type': 'application/json',
   };

   const res = await fetch(URL, {
      method: 'GET',
      headers: headersList,
   });

   const resjson = await res.json();
   return resjson;
}

export { getCatalog, getItem };
