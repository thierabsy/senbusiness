import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Indexpage from './indexPage/Indexpage'

export default class Example extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">Sen Business Component</div>

                            <div className="panel-body">
                                I'm an example component!
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <div className="panel panel-default">
                            <div className="panel-heading">VOILA</div>

                            <div className="panel-body">
                                <Indexpage />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
