import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class Video extends Component {
    render() {
        return (
            <div className="Video">
                <div className="wrapperInner">
                <div className="niceh2">
                    <h2>Comment présenter votre entreprise</h2>
                </div>
                
                <div className="row">
                    <div className="vleft col col-md-6">
                        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/dp3NK7TMMzw?rel=0&amp;controls=0&amp;showinfo=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe> */}
                        {/* <iframe 
                            src="https://www.youtube.com/embed/qy-ck1sxxYU?rel=0&amp;controls=0&amp;showinfo=0" 
                            frameBorder="0" 
                            // allow="autoplay; encrypted-media" 
                            allowFullScreen="allowfullscreen"
                        ></iframe> */}
                        <ReactPlayer 
                            className="videoplayer" 
                            url='https://www.youtube.com/watch?v=qy-ck1sxxYU' 
                            playing={false} 
                            width={'100%'} />
                    </div>
                    <div className="vright col col-md-6">
                        <h3>Savoir se présenter</h3>
                        <p>
                            Il est essentiel de savoir se présenter 
                            pour pouvoir vendre de l'eau chaude au <strong>"Pôle Sud"</strong> .
                        </p>
                        <a href="https://www.youtube.com/watch?time_continue=453&v=qy-ck1sxxYU" target="_blank">
                            <span>Source:</span> Youtube
                        </a>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default Video;
