import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import {store, persistor} from "./redux/store/store";
import { PersistGate } from "redux-persist/integration/react";
import 'rsuite/dist/rsuite.min.css';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);
