import { combineReducers } from 'redux';
import diaryEditor from './diaryEditor';
import flashMessages from './flashMessages';

const rootReducer = combineReducers({
  diaryEditor,
  flashMessages,
});

export default rootReducer;
