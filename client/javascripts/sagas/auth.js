import { call, takeEvery } from 'redux-saga/effects';
import * as api from 'api';
import {
  REQUEST_SIGN_OUT,
} from 'actions/authActionCreators';
import { browserHistory } from 'react-router';

export function* handleRequestSignOut() {
  try {
    yield call(api.signOut);
    window.location.href = '/';
  } catch (error) {
    browserHistory.push('/500');
  }
}

export default function* diarySaga() {
  yield takeEvery(REQUEST_SIGN_OUT, handleRequestSignOut);
}
