import { put, call, takeEvery } from 'redux-saga/effects';
import * as api from 'api';
import {
  POST_DIARY,
  postDiarySuccess,
  postDiaryFailed,
} from 'actions/diaryEditorActionCreators';
import {
  addWarningFlashMessage,
  addSuccessFlashMessage,
  removeAllFlashMessages,
} from 'actions/flashMessagesActionCreators';
import { browserHistory } from 'react-router';

export function* handlePostDiary(action) {
  try {
    const payload = yield call(api.createDiary, action.payload);
    yield put(postDiarySuccess(payload));
    yield put(removeAllFlashMessages());
    yield put(addSuccessFlashMessage('成功しました'));
    browserHistory.push('/');
  } catch (error) {
    yield put(postDiaryFailed(error));
    yield put(removeAllFlashMessages());
    yield error.response.data.errors.map(m => put(addWarningFlashMessage(m)));
  }
}

export default function* diarySaga() {
  yield takeEvery(POST_DIARY, handlePostDiary);
}
