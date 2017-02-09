import { combineReducers } from 'redux';

// Reducers
import contentReducer from './header-reducer';
// import widgetReducer from './widget-reducer';
// import searchLayoutReducer from './search-layout-reducer';

// Combine Reducers
var reducers = combineReducers({
  contentState: contentReducer
});

export default reducers;
