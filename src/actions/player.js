import { createAction, createRequestTypes } from '../utils';


/** ******************************************************************************
 * CLOSE
 */
export const CLOSE_PLAYER = 'CLOSE_PLAYER';
export const closePlayer = () => createAction(CLOSE_PLAYER);


/** ******************************************************************************
 * SET MINIMIZED
 */
export const SET_MINIMIZED = 'SET_MINIMIZED';
export const setMinimized = value => createAction(SET_MINIMIZED, { value });

/** ******************************************************************************
 * SET VIDEO
 */
export const SET_VIDEO = 'SET_VIDEO';
export const setVideo = url => createAction(SET_VIDEO, { url });


/** ******************************************************************************
 * PLAY/PAUSE VIDEO
 */
export const SET_PLAYING = 'SET_PLAYING';
export const setPlaying = value => createAction(SET_PLAYING, { value });


/** ******************************************************************************
 * SET VOLUME
 */
export const SET_VOLUME = 'SET_VOLUME';
export const setVolume = value => createAction(SET_VOLUME, { value });


/** ******************************************************************************
 * SET MUTED
 */
export const SET_MUTED = 'SET_MUTED';
export const setMuted = value => createAction(SET_MUTED, { value });
