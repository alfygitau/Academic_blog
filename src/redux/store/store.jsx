import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import persistStore from "redux-persist/es/persistStore";
import thunk from "redux-thunk";
import rootReducer from "../rootReducer";

const middleware = [thunk];

const composeEnhancer = composeWithDevTools(
  applyMiddleware(...middleware)
);

const store = createStore(rootReducer, composeEnhancer);

const persistor = persistStore(store)

export {persistor, store};