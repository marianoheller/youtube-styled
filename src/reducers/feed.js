import * as feedActions from '../actions/feed';

const initState = {
  results: [],
  error: '',
  isFetching: false,
  nextPageToken: '',
}


export default (state = initState, action) => {
  switch (action.type) {
    case feedActions.GET_HOME.REQUEST:
      return {
        ...state,
        isFetching: true,
        error: '',
      };
    case feedActions.GET_HOME.FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case feedActions.GET_HOME.SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        results: action.results,
        nextPageToken: action.nextPageToken,
      };
    default:
      return state;
  }
}