import React from 'react';
import { Route, IndexRoute } from 'react-router';
import DiaryEntryList from 'containers/DiaryEntryList';
import DefaultLayout from 'containers/Layout/DefaultLayout';
import DiaryEntryForm from 'containers/DiaryEntryForm';

export default (
  <Route path="/">
    <Route component={DefaultLayout} >
      <IndexRoute component={DiaryEntryList} />
      <Route path="/diaries/new" component={DiaryEntryForm} />
    </Route>
  </Route>
);
