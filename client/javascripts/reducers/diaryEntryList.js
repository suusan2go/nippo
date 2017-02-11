import { handleActions } from 'redux-actions';
import * as diaryEntryListActions from 'actions/diaryEntryListActionCreators';

const dairyEntryList = handleActions({
  [diaryEntryListActions.fetchDiaryEntriesSuccess]: (state, action) => ({
    diaryEntries: state.diaryEntries.concat(action.payload.diary_entries),
  }),
  [diaryEntryListActions.clearDiaryEntries]: () => ({
    diaryEntries: [],
  }),
}, { diaryEntries: [] });

export default dairyEntryList;
