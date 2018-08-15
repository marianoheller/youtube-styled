import { combineEpics } from 'redux-observable';
import search from './search';

export default combineEpics(
  search,
);
