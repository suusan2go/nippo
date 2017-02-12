// @flow
// if (process.env.NODE_ENV === 'production') {
//   module.exports = require('./configureStore.prod');
// } else {
//   module.exports = require('./configureStore.dev');
// }
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

let composeEnhancers = compose;
if (process.env.NODE_ENV === 'development') {
  const createLogger = require('redux-logger'); //eslint-disable-line
  const logger = createLogger();
  if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ != null) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__; //eslint-disable-line
  }
  middlewares.push(logger);
}

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, composeEnhancers(
    applyMiddleware(...middlewares),
  ));
  sagaMiddleware.run(rootSaga);
  return store;
}
