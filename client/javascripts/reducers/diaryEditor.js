import { handleActions } from 'redux-actions';
import * as diaryActions from 'actions/diaryEditorActionCreators';

const dairyEditor = handleActions({
  [diaryActions.handleDiaryChange]: (state, action) => ({
    title: action.payload.title || state.title,
    body: action.payload.body || state.body,
  }),
}, { title: '', body: '' });

export default dairyEditor;
