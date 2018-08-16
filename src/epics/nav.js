import axios from 'axios';
import { Observable } from 'rxjs';
import * as navActions from '../actions/nav';
import { combineEpics } from 'redux-observable';



const topBarHideEpic = (action$, state$) => action$
  .ofType(navActions.SCROLL_DIR_DOWN)
  .bufferCount(30)
  .switchMap(() => (
    Observable.of(navActions.hideTopBar())
    .takeUntil(action$.ofType(navActions.SCROLL_DIR_UP))
  ))


const topBarShowEpic = (action$, state$) => action$
  .ofType(navActions.SCROLL_DIR_UP)
  .bufferCount(30)
  .switchMap(() => (
    Observable.of(navActions.showTopBar())
    .takeUntil(action$.ofType(navActions.SCROLL_DIR_DOWN))
  ))
  


export default combineEpics(
  topBarHideEpic,
  topBarShowEpic
)