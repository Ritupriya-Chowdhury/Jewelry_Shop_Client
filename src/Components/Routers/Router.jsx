import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Pages/Home/Main";
import Home from "../Layout/Pages/Home/Home/Home";

 export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {

          path: "/",
          element: <Home></Home>
  
        },
      ]
    },
  ]);
  