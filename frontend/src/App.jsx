import {
   createBrowserRouter,
   RouterProvider,
   useRouteError, 
   isRouteErrorResponse
} from 'react-router-dom';
import {Login, Signup, Home, Catalog, Page404, Item, Checkout} from './pages/index'
import { getCatalog, getItem } from './services/printify';
import './App.css';


const router = createBrowserRouter([
   {
      path: '/',
      element: <Home />,
      errorElement: <ErrorBoundary/>,
      loader: getCatalog,
   },
   {
      path: '/catalog',
      element: <Catalog />,
      errorElement: <ErrorBoundary/>,
      loader: getCatalog,
   },
   {
      path: '/catalog/:category',
      element: <Catalog />,
      errorElement: <ErrorBoundary/>,
      loader: getCatalog,
   },
   {
      path: '/login',
      element: <Login />,
      errorElement: <ErrorBoundary/>,
   },
   {
      path: '/signup',
      element: <Signup />,
      errorElement: <ErrorBoundary/>,
   },
   {
      path: '/checkout',
      element: <Checkout/>,
      errorElement: <ErrorBoundary/>,
   },
   {
      path: '/:id',
      element: <Item/>,
      errorElement: <ErrorBoundary/>,
      loader: getItem,
   },
]);

function ErrorBoundary() {
   const error = useRouteError();

   if (isRouteErrorResponse(error)) {
     if (error.status === 404) {
       return <Page404/>;
     }
 
     if (error.status === 401) {
       return <Page401/>;
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
