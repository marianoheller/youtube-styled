import { createAction, createRequestTypes } from '../utils';

/** ******************************************************************************
 * DO SEARCH
 */

export const SEARCH = createRequestTypes('SEARCH');

export const search = {
  request: input => createAction(SEARCH.REQUEST, { input }),
  success: (results, nextPageToken) => createAction(SEARCH.SUCCESS, { results, nextPageToken }),
  failure: error => createAction(SEARCH.FAILURE, { error }),
};

/** ******************************************************************************
 * SEARCH MORE
 */

export const SEARCH_MORE = createRequestTypes('SEARCH_MORE');

export const searchMore = {
  request: (input, nextPageToken) => createAction(SEARCH_MORE.REQUEST, { input, nextPageToken }),
  success: (results, nextPageToken) => createAction(SEARCH_MORE.SUCCESS, { results, nextPageToken }),
  failure: error => createAction(SEARCH_MORE.FAILURE, { error }),
};

