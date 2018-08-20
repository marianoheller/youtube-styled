import { createAction, createRequestTypes } from '../utils';

/** ******************************************************************************
 * GET HOME
 */

export const GET_HOME = createRequestTypes('GET_HOME');

export const getHome = {
  request: () => createAction(GET_HOME.REQUEST),
  success: (results, nextPageToken) => createAction(GET_HOME.SUCCESS, { results, nextPageToken }),
  failure: error => createAction(GET_HOME.FAILURE, { error }),
};
