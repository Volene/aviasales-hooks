import { rootSaga } from "./sagas";
import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";

const sagas = createSagaMiddleware();
const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhansers(applyMiddleware(sagas)));
sagas.run(rootSaga);

