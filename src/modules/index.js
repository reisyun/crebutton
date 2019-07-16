import { combineReducers } from 'redux';
import preview from './preview';
import header from './header';

export default combineReducers({
  preview,
  header,
});
