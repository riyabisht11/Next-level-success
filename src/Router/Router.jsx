import React from "react";
import Interview from "../Page2/Interview";
import { createBrowserRouter, RouterProvider } from "react-router";
import Layout from "../Layout/Layout";
import Home from "../Layout/Home";
import Recommend from "../Components/Home/Recommend";
import Submit from "../Components/Home/Submit";
import Mobilelearn from "../Components/Home/Mobilelearn";
import Learn from "../Components/Home/Learn";
import Recommendbigscreen from "../Components/Home/Recommendbigscreen";
import Popup from "../Components/Home/Popup";

function Router() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/interview", element: <Interview /> },
        { path: "/viewall", element:<Mobilelearn/> },
        { path: "/recommend", element:<Recommendbigscreen/> },

        
       

      ],
    },
    { path: "/submit", element:<Submit/> },
    { path: "/pop", element:<Popup/> },
  ]);
  return <RouterProvider router={appRouter} />;
}

export default Router;

