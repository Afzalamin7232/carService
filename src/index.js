import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap styles
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./i18n"; 
import { HelmetProvider } from "react-helmet-async";

AOS.init({
  duration: 1000,  // animation duration
  once: true       // animate only once
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HelmetProvider>
    < App />
    </HelmetProvider>
  </React.StrictMode>
);
