import { createStore, combineReducers, applyMiddleware } from "redux";
import inspReducer from "./inspections/reducer";
import membersReducer from "./members/reducer";
import thunk from "redux-thunk";
import logger from "redux-logger";

const middleware = [thunk, logger];
const rootReducer = combineReducers({
  inspections: inspReducer,
  members: membersReducer
});

export default createStore(rootReducer, applyMiddleware(...middleware));
