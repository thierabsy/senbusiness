import React, { Component } from 'react';

import Header from './ipSection/Header';
import Slider from './ipSection/Slider';
import Whoweare from './ipSection/Whoweare';
import Nosservices from './ipSection/Nosservices';
import Dejainscrites from './ipSection/Dejainscrites';
import Nospartenaires from './ipSection/Nospartenaires';
import Temoignages from './ipSection/Temoignages';
import Video from './ipSection/Video';
import Contact from './ipSection/Contact';
import Footer from './ipSection/Footer';

class Indexpage extends Component {
    render() {
        return (
            <div className="">
                <Header/>
                <Slider/>
                <Whoweare/>
                <Nosservices/>
                <Dejainscrites/>
                <Nosservices/>
                <Temoignages/>
                <Video/>
                <Contact/>
                <Footer/>
            </div>
        );
    }
}

export default Indexpage;
