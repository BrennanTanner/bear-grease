import { useState } from 'react';
import {
   createBrowserRouter,
   RouterProvider,
   useRouteError, 
   isRouteErrorResponse
} from 'react-router-dom';
import {Login, Signup, Home, Catalog, Page404} from './pages/index'
import { getCatalog } from './services/catalog';
import './App.css';



const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />,
      errorElement: <p>Oops! Something Went Wrong</p>,
   },
   {
      path: '/catalog',
      element: <Catalog />,
      errorElement: <ErrorBoundary/>,
      loader: getCatalog,
   },
   {
      path: '/login',
      element: <Login />,
      errorElement: <p>Oops! Something Went Wrong</p>,
   },
   {
      path: '/signup',
      element: <Signup />,
      errorElement: <p>Oops! Something Went Wrong</p>,
   },
   {
      path: '/signup/*',
      element: <Signup/>,
      errorElement: <p>Oops! Something Went Wrong</p>,
   },
]);

function ErrorBoundary() {
   const error = useRouteError();

   if (isRouteErrorResponse(error)) {
     if (error.status === 404) {
       return <Page404/>;
     }
 
     if (error.status === 401) {
       return <div>You aren't authorized to see this</div>;
     }
 
     if (error.status === 503) {
       return <div>Looks like our API is down</div>;
     }
 
     if (error.status === 418) {
       return <div>🫖</div>;
     }
   }
 
   return <div>Oops! Something Went Wrong</div>;
 }

function App() {
   return <RouterProvider router={router} />;
}

export default App;
