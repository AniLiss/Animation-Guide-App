import * as types from '../actions/action-types';

export function usecaseContainer(title) {
  return {
    type: types.LOAD_USECASE,
    title
  };
}
