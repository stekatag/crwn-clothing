import { compose, legacy_createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import logger from "redux-logger";
import thunk from "redux-thunk";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [
  process.env.NODE_ENV === "development" && logger,
  thunk,
].filter(Boolean);

const composeEnhancers = compose(applyMiddleware(...middleWares));

export const store = legacy_createStore(
  persistedReducer,
  undefined,
  composeEnhancers
);

export const persistor = persistStore(store);
