import { combineReducers } from 'redux';

const entities = (state = { users: {}, repos: {} }, action) => {
  if (action.response && action.response.entities) {
    return {};
  }

  return state;
};

const rootReducer = combineReducers({
  entities,
});

export default rootReducer;
