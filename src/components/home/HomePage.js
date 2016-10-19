"use strict";

import React from 'react';
import { Link } from 'react-router';

// import { Link } interesting


class HomePage extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Welcome to Pluralsight Administration</h1>
                <p>React, React Router and Flux for ultra-responsive we apps.</p>
                <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        );
    }
}

export default HomePage;

