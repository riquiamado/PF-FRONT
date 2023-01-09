import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import store from "./redux/store";
import { Auth0Provider } from "@auth0/auth0-react";
// import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  //<React.StrictMode>
  <Auth0Provider
    domain="dev-qnr8bzifvzees73j.us.auth0.com"
    clientId="4IFYujZz9yGRPL62guPo1o3hAetaNmJH"
    redirectUri={ window.location.origin }
    useRefreshTokens={ true }
    cacheLocation="localstorage"
  >
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Auth0Provider>
  //</React.StrictMode>
);
