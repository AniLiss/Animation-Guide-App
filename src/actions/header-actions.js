import * as types from '../actions/action-types';

export function loadLayoutContainer(searchType) {
    return {
        type: types.LOAD_LAYOUT_CONTENT,
        searchType
    };
}
