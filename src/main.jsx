import React from "react";
import { createRoot } from "react-dom/client";
import {BrowserRouter, createBrowserRouter, RouterProvider} from 'react-router-dom';
import "./styles.scss";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
