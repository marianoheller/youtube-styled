import { combineReducers } from 'redux';

import search from './search';
import nav from './nav';
import feed from './feed';
import player from './player';

const appReducer = combineReducers({
  search,
  nav,
  feed,
  player,
});


export default (state, action) => appReducer(state, action);
