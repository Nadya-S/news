import { applyMiddleware, createStore } from "redux";
import { newsReducer } from "./newsReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import thunk from "redux-thunk";

const store = createStore(
  newsReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
