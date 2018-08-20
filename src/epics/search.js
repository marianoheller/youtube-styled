/* eslint-disable no-unused-vars */
import axios from 'axios';

import { Observable } from 'rxjs';
import * as searchActions from '../actions/search';
import { combineEpics } from 'redux-observable';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const YT_KEY = process.env.REACT_APP_YT_KEY;


const searchEpic = (action$, state$) => action$
  .ofType(searchActions.SEARCH.REQUEST)
  .filter(action => action.input)
  .switchMap(action => (
    Observable.from(
      axios.get(
        `${BASE_URL}/search?part=snippet&q=${action.input}&type=video&maxResults=10&key=${YT_KEY}`
      )
    )
    .switchMap(r => Observable.of(searchActions.search.success(r.data.items, r.data.nextPageToken)))
    .catch(e => Observable.of(searchActions.search.failure(e.message)))
  ));

const searchMoreEpic = (action$, state$) => action$
  .ofType(searchActions.SEARCH_MORE.REQUEST)
  .switchMap(action => (
    Observable.from(
      axios.get(
        `${BASE_URL}/search?part=snippet&q=${action.input}&type=video&maxResults=10&key=${YT_KEY}&pageToken=${action.nextPageToken}`
      )
    )
    .switchMap(r => Observable.of(searchActions.searchMore.success(r.data.items, r.data.nextPageToken)))
    .catch(e => Observable.of(searchActions.searchMore.failure(e.message)))
  ));


export default combineEpics(
  searchEpic,
  searchMoreEpic,
)