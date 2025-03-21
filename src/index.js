import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use createRoot from "react-dom/client"
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/index.css";

const root = ReactDOM.createRoot(document.getElementById("root")); // ✅ Correct way in React 18
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
