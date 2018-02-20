import React, { Component } from 'react';

import Nosservicecomponent from './Nosservicecomponent';

class Whoweare extends Component {
    render() {
        return (
            <div className="Whoweare">
                <div className="wrapperInner">
                    <h1>GUATAMARE</h1>
                    <h2>Un véritable hub sur l'Aéroport International Blaise Diagne (AIBD)</h2>
                    <p className="p" >
                        Nous vous proposons de retrouvez dans ce site toutes les services et activités 
                        qui sont liés à l'<b>AIBD</b> : <b>achat/vente de billet d'avion</b>, <b>transport</b>, 
                        <b>hôtel</b>, <b>transport</b>, <b>commerce</b>, etc.
                    </p>
                    <h4>Voici notre stratégie</h4>
                    <Nosservicecomponent />
                </div>
            </div>
        );
    }
}

export default Whoweare;
