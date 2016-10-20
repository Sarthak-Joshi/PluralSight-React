export default function courseReducer(state = [], action) {
    switch (action.type) {
        case 'CREATE_COURSE':
            // ...state = new instance of array
            // read about spread operator 
            return [...state, Object.assign({}, action.course)];
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