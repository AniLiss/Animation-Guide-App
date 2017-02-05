import * as types from '../actions/action-types';

export function loadHeaderContent(searchType) {
    return {
        type: types.LOAD_HEADER_CONTENT,
        searchType
    };
}
