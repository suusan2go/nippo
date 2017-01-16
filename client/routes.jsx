import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Top from 'components/Top';
import ArticleList from 'containers/ArticleList';
import DefaultLayout from 'containers/Layout/DefaultLayout';
import LoginLayout from 'containers/Layout/LoginLayout';

export default (
  <Route path="/">
    <Route component={DefaultLayout} >
      <IndexRoute component={Top} />
    </Route>
    <Route component={LoginLayout} >
      <Route path="articles" component={ArticleList} />
    </Route>
  </Route>
);
