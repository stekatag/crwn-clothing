import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

import App from "./App";
import { persistor, store } from "./store/store";

import GlobalStyle from "./global.style";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
            <GlobalStyle />
            <App />
          </StyleSheetManager>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
