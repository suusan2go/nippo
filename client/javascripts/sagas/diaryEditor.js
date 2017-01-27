import { put, call, takeEvery } from 'redux-saga/effects';
import * as api from 'api';
import {
  POST_DIARY,
  postDiarySuccess,
  postDiaryFailed,
} from 'actions/diaryEditorActionCreators';
import { browserHistory } from 'react-router';

export function* handlePostDiary(action) {
  try {
    const payload = yield call(api.createDiary, action.payload);
    yield put(postDiarySuccess(payload));
  } catch (error) {
    yield put(postDiaryFailed(error));
  }
}

export default function* diarySaga() {
  yield takeEvery(POST_DIARY, handlePostDiary);
}
