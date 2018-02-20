import React from 'react';

const HTopBar = () => {
    return(
            <div className="row htopbar">
            <div className="wrapperInner">
               <div className="col col-sm-4 support">
                    SUPPORT: <span><i className="fa fa-phone"></i> 77434567 <i className="fa fa-at"></i> support@senbusiness.net</span> 
                </div>
                <div className="col col-sm-4 social">
                    <a href="#"> <i className="fa fa-facebook"></i> </a>
                    <a href="#"> <i className="fa fa-linkedin"></i> </a>
                    <a href="#"> <i className="fa fa-youtube"></i> </a>
                    <a href="#"> <i className="fa fa-twitter"></i> </a>
                </div>
               <div className="col col-sm-4 seconnecter">
                    <div>
                        <a href="#">
                            <span className="connecticon"><i className="fa fa-lock"></i> </span>
                            <span className="connecticon">SE CONNECTER </span>
                        </a> 
                    </div> 
                </div>
            </div>
            </div>
    )
    }

export default HTopBar;
