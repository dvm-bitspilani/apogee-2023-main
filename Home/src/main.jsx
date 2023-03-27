import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Sponsors from "./components/JSX/Sponsors";
import Armageddon from "./components/JSX/Armageddon";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/armageddon",
    element: <Armageddon />,
  },
  {
    path: "/sponsors",
    element: <Sponsors />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
