"use strict";
// Can be be used as StateLess Component
// Class is used to make sure HotReloadiing works

import React from 'react';

class AboutPage extends React.Component {
    render() {
        return (
            <div>
                <h1>About</h1>
                <p> This application uses following [T]echnologies</p>
                <ul>
                    <li>React</li>
                    <li>React-Rounter</li>
                    <li>Flux</li>
                    <li>Node</li>
                    <li>Gulp</li>
                    <li>Browserify</li>
                    <li>Bootstrap</li>
                </ul>
            </div>
        );
    }
}

export default AboutPage;
