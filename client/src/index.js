import React from "react";
import ReactDOM from "react-dom";
import store from "../src/redux/store"; // debo importar si o si el store de la carpeta stor de redux..
import "./index.css";
import App from "../src/App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

// axios.defaults.baseURL = "http://localhost:3001";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
