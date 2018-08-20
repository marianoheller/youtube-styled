import { Observable } from 'rxjs';
import * as navActions from '../actions/nav';
import { combineEpics } from 'redux-observable';



const topBarHideEpic = (action$, state$) => action$
  .ofType(navActions.SCROLL_DIR_DOWN)
  .throttleTime(1000)
  .switchMap(() => (
    Observable.of(navActions.hideTopBar())
    .takeUntil(action$.ofType(navActions.SCROLL_DIR_UP))
  ))


const topBarShowEpic = (action$, state$) => action$
  .ofType(navActions.SCROLL_DIR_UP)
  .throttleTime(1000)
  .switchMap(() => (
    Observable.of(navActions.showTopBar())
    .takeUntil(action$.ofType(navActions.SCROLL_DIR_DOWN))
  ))
  


export default combineEpics(
  topBarHideEpic,
  topBarShowEpic
)