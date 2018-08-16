import { combineEpics } from 'redux-observable';
import search from './search';
import nav from './nav';

export default combineEpics(
  search,
  nav,
);
