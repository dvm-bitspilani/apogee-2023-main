import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App";
import Sponsors from "./components/JSX/Sponsors";
import Armageddon from "./components/JSX/Armageddon";
import Error from "./components/JSX/Error";

const ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
  },
  {
    path: "/armageddon",
    element: <Armageddon />,
    errorElement: <Error />,
  },
  {
    path: "/sponsors",
    element: <Sponsors />,
    errorElement: <Error />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={ROUTER} />
  </React.StrictMode>
);
