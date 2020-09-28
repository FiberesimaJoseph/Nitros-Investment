import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "semantic-ui-css/semantic.min.css";
import "./css/themify-icons.css";
import "./css/animate.css";
import "./css/style.css";
import "./index.css";

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
