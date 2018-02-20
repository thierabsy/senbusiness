import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Indexpage from './indexPage/Indexpage'

export default class Example extends Component {
    render() {
        return (
            <div className="Mycontainer">
                <Indexpage />
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
