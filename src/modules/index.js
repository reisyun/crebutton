import { combineReducers } from 'redux';
import base from './base';
import custom from './custom';

export default combineReducers({
  base,
  custom,
});
