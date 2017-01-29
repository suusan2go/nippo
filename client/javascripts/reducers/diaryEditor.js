import { handleActions } from 'redux-actions';
import * as diaryActions from 'actions/diaryEditorActionCreators';

const dairyEditor = handleActions({
  [diaryActions.handleDiaryChange]: (state, action) => ({
    title: action.payload.title === null ? state.title : action.payload.title,
    body: action.payload.body === null ? state.body : action.payload.body,
  }),
}, { title: '', body: '' });

export default dairyEditor;
