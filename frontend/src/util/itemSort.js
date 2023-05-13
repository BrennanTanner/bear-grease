import {getCatalog} from '../services/printify.js';

async function getCategories() {
  const catalog = await getCatalog();

  console.log(catalog);
    return {info: 'hi'}
}

export {getCategories};