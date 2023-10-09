import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/MainLayout/Main";
import Home from "../Layout/Pages/Home/Home/Home";
import AllJewelry from "../Layout/Pages/All_Jewelry/AllJewelry/AllJewelry";
import Login from "../Layout/Pages/Login&Registration/login/Login";
import Registration from "../Layout/Pages/Login&Registration/Registration/Registration";
import Profile from "../Layout/Pages/UserProfile/Profile";
import NotFound from "../Layout/Pages/404Pages/404Pages";

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
        {

          path: "/register",
          element: <Registration></Registration>
  
        },
        {

          path: "/login",
          element: <Login></Login>
  
        },
        {

          path: "/profile",
          element: <Profile></Profile>
  
        },
      ]
      
    },
    {
      path: '/*',
      element: <NotFound></NotFound>
    }
  ]);
  