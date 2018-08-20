import { combineReducers } from 'redux';

import search from './search';
import nav from './nav';
import feed from './feed';

const appReducer = combineReducers({
  search,
  nav,
  feed,
});


export default (state, action) => appReducer(state, action);
