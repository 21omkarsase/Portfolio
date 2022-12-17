import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { projectsReducer, projectReducer } from "./reducers";

let initialState = {};
const middleware = [thunk];

const reducer = combineReducers({
  projects: projectsReducer,
  project: projectReducer,
});

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
