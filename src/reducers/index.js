import { combineReducers } from 'redux';

// Reducers
import contentReducer from './content-reducer';
import usecaseReducer from './usecase-reducer';
// import widgetReducer from './widget-reducer';
// import searchLayoutReducer from './search-layout-reducer';

// Combine Reducers
var reducers = combineReducers({
  contentState: contentReducer,
  usecaseState: usecaseReducer
});

export default reducers;
