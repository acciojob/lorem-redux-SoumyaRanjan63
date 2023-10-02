import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import fetchReducer from "./reducer/fectchReducer";

const rootReducer = combineReducers({
  loremipsum: fetchReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
