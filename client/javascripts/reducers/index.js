import { combineReducers } from 'redux';
import diaryEntryList from './diaryEntryList';
import diaryEntryForm from './diaryEntryForm';
import flashMessages from './flashMessages';

const rootReducer = combineReducers({
  diaryEntryForm,
  diaryEntryList,
  flashMessages,
});

export default rootReducer;
