import * as searchActions from '../actions/search';

const initState = {
  input: '',
  results: [],
  error: null,
  isFetching: false,
}


export default (state = initState, action) => {
  switch (action.type) {
    case searchActions.SET_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case searchActions.SEARCH.REQUEST:
      return {
        ...state,
        isFetching: true,
        error: null,
      };
    case searchActions.SEARCH.SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: null,
        results: action.results,
      };
    case searchActions.SEARCH.FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    default:
      return state;
  }
}