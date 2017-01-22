import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ArticleList from 'containers/ArticleList';
import LoginLayout from 'containers/Layout/LoginLayout';

export default (
  <Route path="/">
    <Route component={LoginLayout} >
      <IndexRoute component={ArticleList} />
    </Route>
  </Route>
);
