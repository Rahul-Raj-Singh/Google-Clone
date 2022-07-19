import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { StateContextProvider } from "./context/StateContextProvider";
import "./global.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <StateContextProvider>
        <Router>
            <App />
        </Router>
    </StateContextProvider>
);
