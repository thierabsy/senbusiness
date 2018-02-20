import React, { Component } from 'react';

import HTopBar from './HTopBar';
import HTopAnnonce from './HTopAnnonce';
import HNavbar from './HNavbar';


class Header extends Component {
    render() {
        return (
            <div className="Header">
                <HTopBar/>
                <HTopAnnonce/>
                <HNavbar/>
            </div>
        );
    }
}

export default Header;

