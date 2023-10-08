import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/MainLayout/Main";
import Home from "../Layout/Pages/Home/Home/Home";
import AllJewelry from "../Layout/Pages/All_Jewelry/AllJewelry/AllJewelry";

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {

          path: "/",
          element: <Home></Home>
  
        },
        {

          path: "/allJewelry",
          element: <AllJewelry></AllJewelry>
  
        },
      ]
    },
  ]);
  