import diaryEntryFormSaga from './diaryEntryForm';
import diaryEntryListSaga from './diaryEntryList';
import authSaga from './auth';

export default function* rootSaga() {
  yield [
    diaryEntryFormSaga(),
    diaryEntryListSaga(),
    authSaga(),
  ];
}
