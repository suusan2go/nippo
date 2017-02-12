import diaryEntryFormSaga from './diaryEntryForm';
import diaryEntryListSaga from './diaryEntryList';

export default function* rootSaga() {
  yield [
    diaryEntryFormSaga(),
    diaryEntryListSaga(),
  ];
}
