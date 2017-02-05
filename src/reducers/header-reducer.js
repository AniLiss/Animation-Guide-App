/**
 * Created by user on 04.02.2017.
 */
import * as types from '../actions/action-types';

const initialState = {
    title: ''
};

const headerContentReducer = function(state = initialState, action) {

    switch(action.type) {

        case types.LOAD_HEADER_CONTENT:
            return { ...state, title: action.title };
    }
    return state;
}

export default headerContentReducer;