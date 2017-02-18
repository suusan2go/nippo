import React from 'react';
import configureStore from 'store/configureStore';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import { renderReact } from 'hypernova-react';
import routes from 'routes';

import 'stylesheets/global.scss'; // eslint-disable-line

const AppRouter = (props: { current_user: object }) => {
  const store = configureStore({ currentUser: props.current_user });
  return (
    <Provider store={store}>
      <Router history={browserHistory}>
        {routes}
      </Router>
    </Provider>
  );
};

export default renderReact('AppRouter', AppRouter);
