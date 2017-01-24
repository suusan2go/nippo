// if (process.env.NODE_ENV === 'production') {
//   module.exports = require('./configureStore.prod');
// } else {
//   module.exports = require('./configureStore.dev');
// }
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

const middlewares = [thunk];
const enableDevToolsExtension = process.env.NODE_ENV === 'development' && window.devToolsExtension;

if (process.env.NODE_ENV === 'development') {
  const createLogger = require('redux-logger'); //eslint-disable-line
  const logger = createLogger();
  middlewares.push(logger);
}

export default function configureStore(initialState) {
  const store = createStore(rootReducer, initialState, compose(
    applyMiddleware(...middlewares),
    enableDevToolsExtension ? window.devToolsExtension() : f => f,
  ));
  return store;
}
