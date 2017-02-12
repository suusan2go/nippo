import { handleActions } from 'redux-actions';
import * as diaryActions from 'actions/diaryEntryFormActionCreators';

const dairyEditor = handleActions({
  [diaryActions.handleDiaryEntryChange]: (state, action) => ({
    title: action.payload.title === undefined ? state.title : action.payload.title,
    body: action.payload.body === undefined ? state.body : action.payload.body,
  }),
  [diaryActions.clearDiaryEntry]: () => ({
    title: '',
    body: '',
  }),
}, { title: '', body: '' });

export default dairyEditor;
