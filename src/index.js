import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
//2
import { store } from "./store";
import { Provider } from "react-redux";
//end of 2 -sonra wrap entire app aşağııda with provider ve store propunu ekle  ve cartslice a git

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
