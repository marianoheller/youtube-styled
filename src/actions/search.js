import { createAction, createRequestTypes } from '../utils';


/** ******************************************************************************
 * INPUT
 */

export const SET_INPUT = 'SET_INPUT';
export const setInput = input => createAction(SET_INPUT, { input });


/** ******************************************************************************
 * DO SEARCH
 */

export const SEARCH = createRequestTypes('SEARCH');

export const search = {
  request: input => createAction(SEARCH.REQUEST, { input }),
  success: results => createAction(SEARCH.SUCCESS, { results }),
  failure: error => createAction(SEARCH.FAILURE, { error }),
};

