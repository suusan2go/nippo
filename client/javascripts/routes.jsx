import React from 'react';
import { Route, IndexRoute } from 'react-router';
import ArticleList from 'containers/ArticleList';
import LoginLayout from 'containers/Layout/LoginLayout';
import FullLayout from 'containers/Layout/FullLayout';
import DiaryEditor from 'containers/DiaryEditor';

export default (
  <Route path="/">
    <Route component={LoginLayout} >
      <IndexRoute component={ArticleList} />
    </Route>
    <Route component={FullLayout} >
      <Route path="/diary/new" component={DiaryEditor} />
    </Route>
  </Route>
);
