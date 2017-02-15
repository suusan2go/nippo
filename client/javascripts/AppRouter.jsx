import React from 'react';
import configureStore from 'store/configureStore.js';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { renderReact } from 'hypernova-react';
import routes from 'routes';

import 'stylesheets/global.scss'; // eslint-disable-line

const store = configureStore();
const AppRouter = () => (
  <Provider store={store}>
    <Router history={browserHistory}>
      {routes}
    </Router>
  </Provider>
);

export default renderReact('AppRouter', AppRouter);
