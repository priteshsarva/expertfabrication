import './App.css';
import Footer from './components/Footer';
import Navbars from './components/Navbars';
import Home from './pages/Home';
import Shop from './pages/Shop';
import AboutUs from './pages/AboutUs';
import Service from './pages/Service';
import Blog from './pages/Blog';
import ContactUs from './pages/ContactUs';
import {
  createBrowserRouter, 
  createHashRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AppLayout from './layout/AppLayout';
import SingleProduct from './pages/SingleProduct';

function App() {
  // const router = createBrowserRouter([
  const router = createHashRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/aboutus",
          element: <AboutUs />,
        },
        {
          path: "/service",
          // element: <Service />,
          element: <Navigate to="/" replace />,
        },
        {
          path: "/blog",
          // element: <Blog />,
          element: <Navigate to="/" replace />,
        },
        {
          path: "/contactus",
          element: <ContactUs />,          
        },
        {
          path: "/singleProduct",
          element: <SingleProduct />,
        },
        {
          path: "*",
          element: <Navigate to="/" replace />,
        },

      ]
    },

  ])
  return <>
    <RouterProvider router={router} />

  </>

}

export default App;
