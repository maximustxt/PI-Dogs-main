import React from "react";
import ReactDOM from "react-dom";
import store from "../src/redux/store"; // debo importar si o si el store de la carpeta stor de redux..
import "./index.css";
import App from "../src/App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

//-------------------------------------------------------------------------------------------------------//

// ReactDOM.render(
//   <Provider store={store}>
//     ,
//     <BrowserRouter>
//       ,
//       <App />,
//     </BrowserRouter>
//     ,
//   </Provider>,
//   document.getElementById("root")
// );

//Con PROVIDER conectamos redux con react...
//BrowserRouter nos da la posibilidad de poder usar rutas , links , ect...
// </React.StrictMode> <React.StrictMode> import reportWebVitals from "./reportWebVitals";
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
