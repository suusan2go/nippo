import { combineReducers } from 'redux';
import diaryEntryList from './diaryEntryList';
import diaryEntryForm from './diaryEntryForm';
import flashMessages from './flashMessages';
import currentUser from './currentUser';

const rootReducer = combineReducers({
  diaryEntryForm,
  diaryEntryList,
  flashMessages,
  currentUser,
});

export default rootReducer;
