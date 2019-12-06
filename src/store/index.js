import { createStore, combineReducers, applyMiddleware } from "redux";
import inspReducer from "./inspections/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [thunk, logger];
const rootReducer = combineReducers({
  inspections: inspReducer
});

export default createStore(rootReducer, applyMiddleware(...middleware));
