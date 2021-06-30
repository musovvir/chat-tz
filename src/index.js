import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles.css";
import { Provider } from "react-redux";
import { store } from "./redux/configureStore";
import { HashRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <HashRouter basename={process.env.PUBLIC_URL}>
      <Provider store={store}>
        <App />
      </Provider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
