import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import About from "../Pages/About";
import ContactUs from "../Pages/ContactUs";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import DashboardLayout from "../layouts/DashboardLayout";
import Overview from "../Pages/dashboard/Overview";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayouts></MainLayouts>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },{
          path: '/product',
          element: <Product></Product>
        },{
          path: '/about',
          element: <About></About>
        },{
          path: '/contact-us',
          element: <ContactUs></ContactUs>
        },{
          path: '/login',
          element: <Login></Login>
        },{
          path: '/register',
          element: <Register></Register>
        } 
      ]
    },{
      path: "/dashboard",
      element: <DashboardLayout></DashboardLayout>,
      children: [
        {
          path: '/dashboard/overview',
          element: <Overview></Overview>
        }
      ]
    }
  ]);