import diarySaga from './diaryEntryForm';

export default function* rootSaga() {
  yield [
    diarySaga(),
  ];
}
