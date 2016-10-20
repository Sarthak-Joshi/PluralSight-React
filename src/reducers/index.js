// Root reducer
import {combineReducers} from 'redux';
import courses from './courseReducer';

// Define rootReducer and use combineReducers to combine all reducers
// courses here is an alias for courseReducer 
// Any alias can be use instead of courses 
// Choose it carefully since this will be used in future along with states

const rootReducer = combineReducers({
    courses
});

export default rootReducer;
