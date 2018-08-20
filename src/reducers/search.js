import * as searchActions from '../actions/search';

const initState = {
  input: '',
  searchedInput: '',
  nextPageToken: '',
  results: [],
  error: '',
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
    case searchActions.SEARCH_MORE.REQUEST:
      return {
        ...state,
        searchedInput: action.input,
        isFetching: true,
        error: '',
      };
    case searchActions.SEARCH.FAILURE:
    case searchActions.SEARCH_MORE.FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error,
      };
    case searchActions.SEARCH.SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        results: action.results,
        nextPageToken: action.nextPageToken,
      };
    case searchActions.SEARCH_MORE.SUCCESS:
      return {
        ...state,
        isFetching: false,
        error: '',
        results: [...state.results ,...action.results],
        nextPageToken: action.nextPageToken,
      };
    default:
      return state;
  }
}