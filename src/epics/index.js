import { combineEpics } from 'redux-observable';

import search from './search';
import nav from './nav';
import feed from './feed';

export default combineEpics(
  search,
  nav,
  feed,
);
