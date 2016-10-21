import * as types from '../actions/actionTypes';
export default function courseReducer(state = [], action) {
    switch (action.type) {
        case types.CREATE_COURSE:
            // ...state = new instance of array
            // read about spread operator 
            return [...state, Object.assign({}, action.course)];
        case types.LOAD_COURSES_SUCCESS:
            return action.courses;
        /*
            DONT DO THIS
            State is immutable
            Instead return new copy of state 
            state.push(action.course);
            return state;
        */
        default:
            return state;
    }
}