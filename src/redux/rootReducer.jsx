import { combineReducers } from "redux";
import { loginReducer } from "./reducers/loginReducer";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: "auth",
    storage,
    whitelist: ['user']
}

const rootReducer = combineReducers({
  login: loginReducer,
});

export default persistReducer(persistConfig, rootReducer);
