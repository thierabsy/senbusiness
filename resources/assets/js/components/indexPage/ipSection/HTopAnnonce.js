import React from 'react';

const HTopAnnonce = () => {
        let bg = {
                background: "url(../img/avion.jpg)",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }
        return(
            <div className="row htopannonce" style={bg} >
            <div className="overlay" />
            <div className="wrapperInner">
                {/* <div className="col col-sm-12 col-md-4"></div> */}
                <div className="welcome" >
                    <h3>BIENVENUE DANS VOTRE HUB</h3>
                    <h5>Le Point de Connextion Central sur les Entreprises au Sénégal</h5>
                    <img src="img/logo1.png"/> 
                    <h4>NGUATAMAARE</h4>
                    <div className="h4" ><span>PARTENAIRES OFFICIELS</span></div>
                </div>
                <div className="logo">
                    <img src="img/aibd.png" />
                    <img src="img/asecna.png" />
                    <img src="img/airsenegal2.png" />
                    <img src="img/corsair.png" />
                    <img src="img/senac.jpg" />
                </div>
            </div>
            </div>
        )
    }

export default HTopAnnonce;
