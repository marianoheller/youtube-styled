import { createAction } from "../utils";

/** *****************************************************************
 * SCROLL EVENT
 */

export const SCROLL_DIR_UP = 'SCROLL_DIR_UP';
export const scrollUp = () => createAction(SCROLL_DIR_UP);


export const SCROLL_DIR_DOWN = 'SCROLL_DIR_DOWN';
export const scrollDown = () => createAction(SCROLL_DIR_DOWN);

/** *****************************************************************
 * SHOW/HIDE TOP BAR
 */

export const SHOW_TOPBAR = 'SHOW_TOPBAR';
export const showTopBar = () => createAction(SHOW_TOPBAR);

export const HIDE_TOPBAR = 'HIDE_TOPBAR';
export const hideTopBar = () => createAction(HIDE_TOPBAR);