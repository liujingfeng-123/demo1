import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./layout/index.tsx";

const root = createRoot(document.getElementById("app"));
root.render(
  <Router>
    <App />
  </Router>
);
