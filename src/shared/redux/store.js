import { combineReducers, createStore } from "redux";
import currency from "./modules/currency";

const rootReducer = combineReducers({
    "currency": currency,
});

const store = createStore(rootReducer);

export default store;