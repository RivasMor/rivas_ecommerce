import React from "react";
import { render } from "react-dom";
import "./index.css";
import App from "./App";
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

const root = document.getElementById("root");
render(<App />, root);