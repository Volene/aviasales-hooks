import { rootSaga } from "./sagas";
import { createStore, compose, applyMiddleware } from "redux";
import {normalizeMiddleware} from './middleware/normalizeMiddleware'
import createSagaMiddleware from "redux-saga";
import reducers from "./reducers";

const sagas = createSagaMiddleware();
const composeEnhansers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhansers(applyMiddleware(sagas,normalizeMiddleware)));
sagas.run(rootSaga);

