import React from "react";
import ReactDOM from "react-dom"; // ✅ old API (not client)
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css"; 
import AOS from "aos";
import "aos/dist/aos.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./i18n"; 
import { HelmetProvider } from "react-helmet-async";

AOS.init({
  duration: 1000,
  once: true
});

// ✅ Use hydrate instead of createRoot
ReactDOM.hydrate(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
