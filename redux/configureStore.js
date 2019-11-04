import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import rootReducer from "./rootReducer";

const middleWares = [thunk];

const configureStore = (initialState, options) => {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleWares))
  );
};

export default configureStore;
