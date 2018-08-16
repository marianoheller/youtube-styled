import { combineReducers } from 'redux';

import search from './search';
import nav from './nav';

const appReducer = combineReducers({
  search,
  nav,
});


export default (state, action) => appReducer(state, action);
