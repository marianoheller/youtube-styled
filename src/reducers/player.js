import * as playerActions from '../actions/player';

const initState = {
  isOpen: false,
  isMinimized: false,

  url: '',
  isPlaying: false,
  volume: 1,
  isMuted: false,
  isLooping: false,
}


export default (state = initState, action) => {
  switch (action.type) {
    case playerActions.CLOSE_PLAYER:
      return {
        ...initState,
      };
    case playerActions.SET_VIDEO:
      return {
        ...state,
        url: action.url,
        isOpen: true,
        isMinimized: false,
        isPlaying: true,
        isMuted: false,
        isLooping: false,
      };
    case playerActions.SET_MINIMIZED:
      return {
        ...state,
        isMinimized: action.value,
      };
    case playerActions.SET_PLAYING:
      return {
        ...state,
        isPlaying: action.value,
      };
    case playerActions.SET_LOOPING:
      return {
        ...state,
        isLooping: action.value,
      };
    case playerActions.SET_VOLUME:
      return {
        ...state,
        volume: action.value,
      };
    case playerActions.SET_MUTED:
      return {
        ...state,
        muted: action.value,
      };
    default:
      return state;
  }
}