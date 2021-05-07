import { createStore, combineReducers, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

import dataReducer from "./dataHandler";
import modalReducer from "./modalHandler";

const rootReducer = combineReducers({
  data: dataReducer,
  modal: modalReducer,
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));
export default store;
