// Root reducer
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';

// Define rootReducer and use combineReducers to combine all reducers
// courses here is an alias for courseReducer
// authors here is an alias for authorReducer    
// Any alias can be use instead of courses 
// Choose it carefully since this will be used in future along with states

const rootReducer = combineReducers({
    courses,
    authors
});

export default rootReducer;
