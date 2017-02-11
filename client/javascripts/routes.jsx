import React from 'react';
import { Route, IndexRoute } from 'react-router';
import DiaryEntryList from 'containers/DiaryEntryList';
import LoginLayout from 'containers/Layout/LoginLayout';
import FullLayout from 'containers/Layout/FullLayout';
import DiaryEntryForm from 'containers/DiaryEntryForm';

export default (
  <Route path="/">
    <Route component={LoginLayout} >
      <IndexRoute component={DiaryEntryList} />
      <Route path="/diaries/new" component={DiaryEntryForm} />
    </Route>
  </Route>
);
