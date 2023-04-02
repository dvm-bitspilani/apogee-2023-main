import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Armageddon from "./components/JSX/Armageddon";
import Sponsors from "./components/JSX/Sponsors";
import "./index.css";
import MediaPartners from "./components/JSX/MediaPartners";

const Route = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <App />,
          // errorElement: <Error />,
        },
        {
          path: "/armageddon/",
          element: <Armageddon />,
          // errorElement: <Error />,
        },
        {
          path: "/sponsors/",
          element: <Sponsors />,
          // errorElement: <Error />,
        },
        {
          path: "/mediapartners/",
          element: <MediaPartners />,
          // errorElement: <Error />,
        },
      ])}
    />
  );
};

export default Route;
