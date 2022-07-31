import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css";
import { CurrentDataContextProvider } from "./context/currentData";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CurrentDataContextProvider>
      <App />
    </CurrentDataContextProvider>
  </React.StrictMode>
);
