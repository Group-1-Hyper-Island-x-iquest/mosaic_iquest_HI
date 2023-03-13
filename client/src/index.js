import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import store from "./reducers-store/store";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import App from "./App";
import "./styles/index.css";
import "./styles/Button.css";
import "./styles/Form.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Layout>
          <App />
        </Layout>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
