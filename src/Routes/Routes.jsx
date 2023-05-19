import {
    createBrowserRouter
  } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../components/Home/Home";
import AllToys from "../components/AllToy/AllToys";
import MyToys from "../components/MyToy/MyToys";
import AddToy from "../components/AddToy/AddToy";
import Blog from "../components/Blog/Blog";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Register from "../components/Login/Register";
import Login from "../components/Login/Login";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>,
      errorElement: <ErrorPage/>,
      children:[
        {
            path: '/',
            element: <Home/>
        },
        {
            path: 'alltoys',
            element: <AllToys/>
        },
        {
            path: 'mytoys',
            element: <MyToys/>
        },
        {
            path: 'addtoy',
            element: <AddToy/>
        },
        {
            path : 'blog',
            element: <Blog/>
        },
        {
          path : 'register',
          element: <Register/>
        },
        {
          path: 'login',
          element: <Login/>
        }

      ]
    },
  ]);


  export default router;