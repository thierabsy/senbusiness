import React, { Component } from 'react';

class Dejacomponentheader extends Component {
    componentDidMount(){
        // this.nameInput.focus();
      }
    render(){
        return (
            <div className="row dejanav">
                <div className="dtop">
                    <h1>Que Recherchez-Vous?</h1>
                    <input 
                        type="text" 
                        // ref={(input) => { this.nameInput = input; }}
                        autoFocus />
                </div>
                <div className="clearfix dbottom">
                    <div className="col col-sm-4 tous">Tous</div>
                    <div className="col col-sm-4 categories">
                        <h5>Catégories</h5>
                        <select>
                            <option value="1">Toutes</option>
                            <option value="2">Commerce</option>
                            <option value="1">Restauration</option>
                            <option value="1">Transport</option>
                            <option value="1">Ticket</option>
                        </select>
                    </div>
                    <div className="col col-sm-4 recherche">
                    {/* <input type="text" /> <i className="fa fa-search"></i> */}
                        <div className="rechercheinput">
                            <div className="input-group">
                                <span className="input-group-addon" id="basic-addon2"> <i className="fa fa-search"></i> </span>
                                <input type="text" className="form-control" placeholder="Recherche..." aria-describedby="basic-addon2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Dejacomponentheader;
