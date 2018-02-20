import React, { Component } from 'react';
import Slider from 'react-slick';

import {temoinsdata} from '../../data/mainslider';

class Temoignages extends Component {
    constructor(props) {
    super(props)
       
    }
  
    render() {
        let singletemoin = () => {
            return(
                temoinsdata.map((temoin, index) => {
                    return(
                        <div key={index} className="singletemoin" >
                            <div className="temoinwrapper">
                                <img src={`img/${temoin.img}`} />
                                <h4> {temoin.h4} </h4>
                                <h6> {temoin.h6} </h6>
                                <span>*****</span>
                                <p> {temoin.p} </p>
                            </div>
                        </div>
                    );
                })
            );
        }

        let settings = {
                infinite: true,
                speed: 5000,
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true
            };
        
        return (
            <div>
                <div className="wrapperInner">
                    <div className="niceh2">
                        <h2>ILS ONT DIT ...</h2>
                    </div>
                </div>
                <div className="row Temoignages" >
                    {/* <div className="bgvideo">
                        <video src="img/bg_video.mov" autoPlay="true" loop="true" />
                    </div>
                    <div className="bgoverlay" /> */}
                    {/* <button className='button btnleft' onClick={this.previous}>Préc.</button> */}
                    
                    <Slider ref={t => this.slider = t } {...settings}>
                        { singletemoin() }
                    </Slider>
                        {/* <button className='button btnright' onClick={this.next}>Suiv.</button> */}
                </div>
            </div>
    );
    }
}

export default Temoignages;
