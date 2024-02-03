import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import contact from "./components/Contact";
import "./styles/app.css";
import ContactAdder from "./components/ContactAdder";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
