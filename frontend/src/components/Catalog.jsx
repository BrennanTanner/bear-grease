import { useLoaderData } from 'react-router-dom';
import * as React from 'react';

export default function Catalog() {
   const CatalogItems = useLoaderData();

   console.log(CatalogItems);

   return (
      <main>
         {CatalogItems?.map((item) => {
            return (
               <h1>{item.title}</h1>
            );
         })}
      </main>
   );
}
