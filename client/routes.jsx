import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from 'components/App';
import Gift from 'components/Gift';
import Layout from 'containers/Layout';

export default (
  <Route path="/" component={Layout}>
    <IndexRoute component={App} />
    <Route path="/gifts" component={Gift} />
  </Route>
);
