import { put, call, takeEvery } from 'redux-saga/effects';
import * as api from 'api';
import {
  FETCH_DIARY_ENTRIES,
  fetchDiaryEntriesSuccess,
} from 'actions/diaryEntryListActionCreators';
import { browserHistory } from 'react-router';

export function* handleFetchDiaryEntries(action) {
  try {
    const payload = yield call(api.fetchDiaryEntries, action.payload);
    yield put(fetchDiaryEntriesSuccess(payload));
  } catch (error) {
    browserHistory.push('/500');
  }
}

export default function* diarySaga() {
  yield takeEvery(FETCH_DIARY_ENTRIES, handleFetchDiaryEntries);
}
