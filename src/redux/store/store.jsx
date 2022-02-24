import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "../rootReducer";

const middleware = [thunk];

const composeEnhancer = composeWithDevTools(
  applyMiddleware(...middleware)
);

const store = createStore(rootReducer, composeEnhancer);
export default store;