import * as types from '../actions/action-types';

export function loadLayoutContainer(title) {
  return {
    type: types.LOAD_CONTENT,
    title
  };
}
