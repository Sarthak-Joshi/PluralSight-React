import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

// A function to be called at App start to configure store
// initialState : very important if doing server side rendering 
export default function configureStore(initialState) {
    return createStore(
        rootReducer,
        initialState,
        applyMiddleware()
    );
}

// Check react-sligshot for more middleware
