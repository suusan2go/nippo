import { createAction } from 'redux-actions';

export const POST_DIARY_ENTRY = 'POST_DIARY_ENTRY';
export const POST_DIARY_ENTRY_SUCCESS = 'POST_DIARY_ENTRY_SUCCESS';
export const POST_DIARY_ENTRY_FAILED = 'POST_DIARY_ENTRY_FAILED';
export const HANDLE_DIARY_ENTRY_CHANGE = 'HANDLE_DIARY_ENTRY_CHANGE';

export const postDiaryEntry = createAction(POST_DIARY_ENTRY);
export const postDiaryEntrySuccess = createAction(POST_DIARY_ENTRY_SUCCESS);
export const postDiaryEntryFailed = createAction(POST_DIARY_ENTRY_FAILED);
export const handleDiaryEntryChange = createAction(HANDLE_DIARY_ENTRY_CHANGE, e => (
  { [e.target.name]: e.target.value }
));
