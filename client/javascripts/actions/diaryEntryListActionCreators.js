// @flow
import { createAction } from 'redux-actions';

export const FETCH_DIARY_ENTRIES = 'FETCH_DIARY_ENTRIES';
export const FETCH_DIARY_ENTRIES_SUCCESS = 'FETCH_DIARY_ENTRIES_SUCCESS';
export const CLEAR_DIARY_ENTRIES = 'CLEAR_DIARY_ENTRIES';

export const fetchDiaryEntries = createAction(FETCH_DIARY_ENTRIES);
export const fetchDiaryEntriesSuccess = createAction(FETCH_DIARY_ENTRIES_SUCCESS);
export const clearDiaryEntries = createAction(CLEAR_DIARY_ENTRIES);
