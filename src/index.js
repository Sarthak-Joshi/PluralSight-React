import $ from 'jquery';
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
import { loadCourses } from './actions/courseActions';
import { loadAuthors } from './actions/authorActions';

// import {moduleName} from 'module'; => This is named import
/* Webpack can install styles too..!!*/

import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const store = configureStore(); // Can pass initialState
store.dispatch(loadCourses());
store.dispatch(loadAuthors());

/*
    wrapping up inside document.ready ()
    to avoid "register component target container is not a dom element" in mocha tests
    http://stackoverflow.com/a/27693136
*/

$(function () {
    render(
        <Provider store={store}>
            <Router history={browserHistory} routes={routes} />
        </Provider>, document.getElementById('app')
    );
    // console.log( "ready!" );
});


