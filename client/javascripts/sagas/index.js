import diarySaga from './diary';

export default function* rootSaga() {
  yield [
    diarySaga(),
  ];
}
