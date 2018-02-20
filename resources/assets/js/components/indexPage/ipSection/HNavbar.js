import React from 'react';

const HNavbar = () => {
        return(
        <div className="row hnavbar">
                <div className="wrapperInner">
                <div className="col-md-3 navleft">
                        <span>GUATAMARE</span>
                </div> 
                <div className="col-md-6 navmiddle">
                        <ul>
                                <li>ACCUEIL</li>
                                <li>NOS SERVICES</li>
                                <li>BLOG</li>
                                <li>CONTACT</li>
                        </ul>
                </div> 
                <div className="col-md-3 navright">
                        <a href="#">INSCRIVEZ VOTRE SOCIETE</a>
                </div> 
                </div>
        </div>
        )
    }

export default HNavbar;
