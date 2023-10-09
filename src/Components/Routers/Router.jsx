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
import AddAJewelry from "../Layout/Pages/AddAJewelry/AddAJewelry";
import MyJewelry from "../Layout/Pages/MyJewelry/MyJewelry";
import Dashboard from "../Layout/Pages/DashBoard/Dashboard";
import GoogleLogin from "../Layout/Pages/Login&Registration/login/GoogleLogin";
import OwnerDashboard from "../Layout/Pages/DashBoard/OwnerDashboard";
import UserDashBoard from "../Layout/Pages/DashBoard/UserDashBoard";
import AddedJewelry from "../Layout/Pages/AddAJewelry/AddedJewelry";
import AllUsers from "../Layout/Pages/AllUser/AllUsers";

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

          path: "/login-with-google",
          element:<GoogleLogin></GoogleLogin>
  
        },

        {

          path: "/profile",
          element: <Profile></Profile>
  
        },
        {

          path: "/addJewelry",
          element: <AddAJewelry></AddAJewelry>
  
        },
        {

          path: "/addedJewelry",
          element: <AddedJewelry></AddedJewelry>
  
        },
        {

          path: "/myJewelry",
          element: <MyJewelry></MyJewelry>
  
        },
        
      ]
      
    },
    {
      path: '/dashboard',
      element: <Dashboard></Dashboard>,
      children:[
        {
        path: '/dashboard/ownerDashboard',
        element:<OwnerDashboard></OwnerDashboard>
        },
        {
          path: '/dashboard/userDashboard',
          element:<UserDashBoard></UserDashBoard>
          },
          {

            path: "/dashboard/allUsers",
            element: <AllUsers></AllUsers>
    
          },
      ]
    },
    {
      path: '/*',
      element: <NotFound></NotFound>
    }
  ]);
  