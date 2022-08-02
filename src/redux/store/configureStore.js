import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import immutableStateInvariantMiddleware from "redux-immutable-state-invariant";

export default function configureStore(initialState) {
  debugger;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // add support for Redux dev tools
  return createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(immutableStateInvariantMiddleware()))
  );
}
