import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; 
import Catalog  from './components/Catalog';
import { getCatalog } from './services/catalog'
import './App.css'


const router = createBrowserRouter([
  {
     path: '/',
     element: <Catalog />,
     loader: getCatalog,
  },
  // {
  //    path: '/connections',
  //    element: <Connections />,
  //    loader: getConnections,
  // },
  // {
  //    path: '/update',
  //    element: <UpdateUser />,
  // },
  // {
  //    path: '/user/:userId',
  //    element: <ProfileHeader />,
  //    loader: getPostsAndConnections,
  // },
  // {
  //    path: '/login',
  //    element: <Login />,
  // },
  // {
  //    path: '/register',
  //    element: <Register />,
  // },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
