import { combineReducers } from 'redux';
import contentReducer from './content-reducer';
import usecaseReducer from './usecase-reducer';

var reducers = combineReducers({
  contentState: contentReducer,
  usecaseState: usecaseReducer
});

export default reducers;
