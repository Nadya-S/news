import {combineReducers, createStore} from "redux";
import cashReducer from "./cashReducer.js";
import {customerReducer} from "./customerReducer.js";
import { composeWithDevTools } from '@redux-devtools/extension';

const rootReducer = combineReducers({
    cash: cashReducer,
    customers: customerReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;