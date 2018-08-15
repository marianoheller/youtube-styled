import axios from 'axios';

import { Observable } from 'rxjs';
import * as searchActions from '../actions/search';
import { combineEpics } from 'redux-observable';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';


const inputTriggerEpic = (action$, state$) => action$
  .ofType(searchActions.SEARCH.SET_INPUT)
  .filter(action => action.input)
  .debounce(500)
  .switchMap(action => Observable.of(searchActions.search.request(action.input)));

const searchEpic = (action$, state$) => action$
  .ofType(searchActions.SEARCH.REQUEST)
  .filter(action => action.input)
  .switchMap(action => (
    Observable.from(
      axios.get(`${BASE_URL}/search?part=snippet&q=${action.input}&type=video&key={YOUR_API_KEY}`)
    )
    .catch(e => Observable.of(searchActions.search.failure(e.message)))
  ))


export default combineEpics(
  searchEpic,
  inputTriggerEpic,
)