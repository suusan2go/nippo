import { combineReducers } from 'redux';
import diaryEntryForm from './diaryEntryForm';
import flashMessages from './flashMessages';

const rootReducer = combineReducers({
  diaryEntryForm,
  flashMessages,
});

export default rootReducer;
