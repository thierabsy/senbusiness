import React, { Component } from 'react';

import Dejacomponent from './Dejacomponent';
import Dejacomponentheader from './Dejacomponentheader';

class Dejainscrites extends Component {
    render() {
        return (
            <div className="Dejainscrites">
            <div className="wrapperInner">
                <Dejacomponentheader />
                <div className="societes">
                    <Dejacomponent />
                    <Dejacomponent />
                    <Dejacomponent />
                    <Dejacomponent />
                    <Dejacomponent />
                    <Dejacomponent />
                    <Dejacomponent />
                    <Dejacomponent />
                    <Dejacomponent />
                    <Dejacomponent />
                    <Dejacomponent />
                </div>
                <div className="ps" >
                    <a href="#">  Précédent </a>
                    <a href="#"> Suivant </a>
                </div>
            </div>
            </div>
        );
    }
}

export default Dejainscrites;
