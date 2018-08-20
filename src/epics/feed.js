/* eslint-disable no-unused-vars */
import axios from 'axios';

import { Observable } from 'rxjs';
import * as feedActions from '../actions/feed';
import { combineEpics } from 'redux-observable';

const BASE_URL = 'https://www.googleapis.com/youtube/v3';
const YT_KEY = process.env.REACT_APP_YT_KEY;


const getHomeEpic = (action$, state$) => action$
  .ofType(feedActions.GET_HOME.REQUEST)
  .switchMap(action => (
    Observable.from(
      axios.get(
        `${BASE_URL}/videos?part=snippet&chart=mostPopular&regionCode=US&maxResults=25&key=${YT_KEY}`
      )
    )
    .switchMap(r => Observable.of(feedActions.getHome.success(r.data.items, r.data.nextPageToken)))
    .catch(e => Observable.of(feedActions.getHome.failure(e.message)))
  ));


export default combineEpics(
  getHomeEpic,
)
