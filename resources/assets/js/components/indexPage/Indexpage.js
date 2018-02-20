import React, { Component } from 'react';

import Header from './ipSection/Header';
import Islider from './ipSection/Islider';
import Whoweare from './ipSection/Whoweare';
import Nosservices from './ipSection/Nosservices';
import Dejainscrites from './ipSection/Dejainscrites';
import Nospartenaires from './ipSection/Nospartenaires';
import Temoignages from './ipSection/Temoignages';
import Video from './ipSection/Video';
import Footer from './ipSection/Footer';

class Indexpage extends Component {
    render() {
        return (
            <div className="">
                <Header/>
                <Islider/>
                <Whoweare/>
                <Nosservices/>
                <Dejainscrites/>
                <Video/>
                <Temoignages/>
                <Nospartenaires/>
                <Footer/>
            </div>
        );
    }
}

export default Indexpage;
