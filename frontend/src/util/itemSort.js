import { getCatalog } from '../services/printify.js';

async function getCategories() {
   const req = { params: '' };
   const catalog = await getCatalog(req);

   const categories = catalog.data.map((item) => {
      return item.tags;
   });

   console.log(categories);
   return { info: 'hi' };
}

async function getHomeImages() {
   const req = { params: '' };
   const catalog = await getCatalog(req);

   const categories = [];
   categories.push(
      catalog.data.filter((item) => item.tags.includes('Accessories'))[0]
   );
   categories.push(
      catalog.data.filter((item) => item.tags.includes("Men's Clothing"))[0]
   );
   categories.push(
      catalog.data.filter((item) => item.tags.includes("Women's Clothing"))[0]
   );



    const newC = categories.map((item) => {
      console.log(item.images[0].src.split('=')[0]);
        //item.images.filter(
        // image =>  image.src.split('=')[1] == 'lifestyle' || image.src.split('=')[1] == 'front'
         //image.is_default &&
      
   });

   console.log(catalog);
   return { info: 'hi' };
}

export { getCategories, getHomeImages };
