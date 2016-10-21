import * as types from '../actions/actionTypes';
import initialState from './initialState';
// Concept : Every reducer have slice of state
export default function courseReducer(state = initialState.courses, action) {
    switch (action.type) {
        // case types.CREATE_COURSE:
            // ...state = new instance of array
            // read about spread operator 
            // return [...state, Object.assign({}, action.course)];

        case types.CREATE_COURSE_SUCCESS:
            return [
                ...state, Object.assign({}, action.course)
            ];

        case types.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(course => course.id !== action.course.id), Object.assign({}, action.course)
            ];
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

/* Picture of store can be easily visualized with different reducers grabbing slice of state */