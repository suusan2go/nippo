import { takeEvery } from 'redux-saga';
import { put, call } from 'redux-saga/effects';
import {
  POST_DIARY,
  postDiarySuccess,
  postDiaryFailed,
} from '../actions/diaryActionsCreators';
import { api } from 'api';

export function* handlePostDiary(action) {
  const { payload, error } = yield call(api.createDiary, action.payload);
  if (payload && !error) {
    yield put(postDiarySuccess(payload));
  } else {
    yield put(postDiaryFailed(error));
  }
}

export default function* diarySaga() {
  yield* takeEvery(POST_DIARY, handlePostDiary);
}
