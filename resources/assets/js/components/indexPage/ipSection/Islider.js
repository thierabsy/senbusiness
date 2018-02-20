import React, { Component } from 'react';
import Slider from 'react-slick';

import {sldata} from '../../data/mainslider';

class Islider extends Component {
    constructor(props) {
    super(props)
        this.next = this.next.bind(this)
        this.previous = this.previous.bind(this)
    }
    next() {
        this.slider.slickNext()
    }
    previous() {
        this.slider.slickPrev()
    }
    render() {
        let singleslide = () => {
            return(
                sldata.map((item, index) => {
                    return(
                        <div key={index}>
                            <div className="row">
                                <div className="col col-md-7">
                                    <img src={`img/${item.img}`} />
                                </div>
                                <div className="col col-md-5">
                                    <div className="innerdiv">
                                        <h2> {item.h2} </h2>
                                        <p> {item.p}</p>
                                        <div className="buttons">
                                            <a href={item.linkbtn1} ><button className="btn left"> {item.btn1} </button></a>
                                            <a href={item.linkbtn2}><button className="btn right"> {item.btn2} </button></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            );
        }
        let settings = {
                infinite: true,
                speed: 5000,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: true
            };
        return (
            <div className="row Islider" >
                <Slider ref={c => this.slider = c } {...settings} className="sliderwrapper" >
                     { singleslide() }
                </Slider>
            <div className="prevnext" >
                <button className='prev' onClick={this.previous}>Précedent</button>
                <button className='next' onClick={this.next}>Suivant</button>
            </div>
        </div>
    );
    }
}

export default Islider;
