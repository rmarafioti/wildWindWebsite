import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./client/App";
import "./client/index.css";

const helmetContext = {};

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <HelmetProvider context={helmetContext}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
