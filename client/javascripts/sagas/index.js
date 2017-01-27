import diarySaga from './diaryEditor';

export default function* rootSaga() {
  yield [
    diarySaga(),
  ];
}
