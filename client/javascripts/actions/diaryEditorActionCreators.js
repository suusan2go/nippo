import { createAction } from 'redux-actions';

export const POST_DIARY = 'POST_DIARY';
export const POST_DIARY_SUCCESS = 'POST_DIARY_SUCCESS';
export const POST_DIARY_FAILED = 'POST_DIARY_FAILED';

export const postDiary = createAction(POST_DIARY);
export const postDiarySuccess = createAction(POST_DIARY_SUCCESS);
export const postDiaryFailed = createAction(POST_DIARY_FAILED);
export const handleDiaryChange = createAction(POST_DIARY_FAILED, e => ({ [e.target.name]: e.target.value }));
