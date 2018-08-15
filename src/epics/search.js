import axios from 'axios';

import { Observable } from 'rxjs';
import * as searchActions from '../actions/search';
import { combineEpics } from 'redux-observable';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const YT_KEY = process.env.REACT_APP_YT_KEY;


const inputTriggerEpic = (action$, state$) => action$
  .ofType(searchActions.SET_INPUT)
  .filter(action => action.input)
  .debounceTime(500)
  .switchMap(action => Observable.of(searchActions.search.request(action.input)));


const searchEpic = (action$, state$) => action$
  .ofType(searchActions.SEARCH.REQUEST)
  .filter(action => action.input)
  .switchMap(action => (
    Observable.from(
      axios.get(`${BASE_URL}/search?part=snippet&q=${action.input}&type=video&key=${YT_KEY}`)
    )
    .switchMap(r => Observable.of(searchActions.search.success(r.data)))
    .catch(e => Observable.of(searchActions.search.failure(e.message)))
  ));


export default combineEpics(
  searchEpic,
  inputTriggerEpic,
)