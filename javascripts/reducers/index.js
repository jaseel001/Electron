import { combineReducers } from 'redux';

// Reducers
import mainLayoutReducer from './main-layout-reducer';

// Combine Reducers
var reducers = combineReducers({
    mainLayoutState: mainLayoutReducer,
});

export default reducers;