import React, { Component } from 'react';

import HTopBar from './HTopBar';
import HTopAnnonce from './HTopAnnonce';
import HNavbar from './HNavbar';


class Header extends Component {
    render() {
        return (
            <div className="">
                HEADER
                <div>
                    H: <HTopBar/>
                    H: <HTopAnnonce/>
                    H: <HNavbar/>
                </div>
            </div>
        );
    }
}

export default Header;

