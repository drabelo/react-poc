import { combineReducers } from 'redux';
import users from './users';
import usersList from './usersList';

export default combineReducers({
  users,
  usersList,
});
