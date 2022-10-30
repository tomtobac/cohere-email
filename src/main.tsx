import React from "react";
import ReactDOM from "react-dom/client";
import { createMemoryRouter, RouterProvider, Navigate } from "react-router-dom";

import { Settings } from "@components/Settings";
import { Samples } from "@components/Samples";

import App from "./App";
import "./index.css";

const Redirect = () => <Navigate to="/settings" />;

const router = createMemoryRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Redirect />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/samples",
        element: <Samples />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
