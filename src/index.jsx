import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
// import "primereact/resources/themes/lara-dark-purple/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import App from "./components/app"





ReactDOM.render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
  )