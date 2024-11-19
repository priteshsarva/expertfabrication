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
  RouterProvider,
  Navigate,
} from "react-router-dom";
import AppLayout from './layout/AppLayout';
import SingleProduct from './pages/SingleProduct';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/Shop",
          element: <Shop />,
        },
        {
          path: "/AboutUs",
          element: <AboutUs />,
        },
        {
          path: "/Service",
          // element: <Service />,
          element: <Navigate to="/" replace />,
        },
        {
          path: "/Blog",
          // element: <Blog />,
          element: <Navigate to="/" replace />,
        },
        {
          path: "/ContactUs",
          element: <ContactUs />,          
        },
        {
          path: "/SingleProduct",
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
