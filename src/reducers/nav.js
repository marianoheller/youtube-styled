import * as navActions from '../actions/nav';

const initState = {
  topBarIsHidden: false,
}


export default (state = initState, action) => {
  switch (action.type) {
    case navActions.SHOW_TOPBAR:
      return {
        ...state,
        topBarIsHidden: false,
      };
    case navActions.HIDE_TOPBAR:
      return {
        ...state,
        topBarIsHidden: true,
      };
    default:
      return state;
  }
}