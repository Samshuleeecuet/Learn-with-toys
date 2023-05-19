import {
    createBrowserRouter
  } from "react-router-dom";
import HomeLayout from "../Layout/HomeLayout";
import Home from "../components/Home/Home";
import AllToys from "../components/AllToy/AllToys";
import MyToys from "../components/MyToy/MyToys";
import AddToy from "../components/AddToy/AddToy";
import Blog from "../components/Blog/Blog";

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout/>,
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
        }

      ]
    },
  ]);


  export default router;