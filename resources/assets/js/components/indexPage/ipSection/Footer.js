import React, { Component } from 'react';

import Ftop from './Ftop';
import Fstaytunned from './Fstaytunned';
import Fcopyright from './Fcopyright';

class Footer extends Component {
    render() {

        return (
            <div className="Footer" style={{background: "url(img/footer.png)", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center center"}} >
               <div className="foverlay" />
                <Ftop />
                <Fstaytunned />
                <Fcopyright />
            </div>
        );
    }
}

export default Footer;
