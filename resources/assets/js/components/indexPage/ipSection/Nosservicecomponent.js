import React from 'react';

const services = [
    {
        i: "users",
        h2: "Aider les Clients",
        p: " Lorem ipsum dolor sit amet, Consectetur adipiscing elit. Curabitur eu libero vitae nunc pretium dictum.",
     },
    {
        i: "eye",
        h2: "Aider la Société",
        p: " Lorem ipsum dolor sit amet, Consectetur adipiscing elit. Curabitur eu libero vitae nunc pretium dictum.",
    },
    {
        i: "star",
        h2: "Aider le Sénégal",
        p: " Lorem ipsum dolor sit amet, Consectetur adipiscing elit. Curabitur eu libero vitae nunc pretium dictum.",
    }
    
]

const singleService = services.map((service, index) => {
        return(
            <div key={index} className="col col-md-4">
                <div className="singleservice">
                    <i className={`fa fa-${service.i}`}></i>
                    <h2> {service.h2} </h2>
                    <p>{service.p}</p>
                    <a href="#"><i className="fa fa-angle-double-left"></i> En savoir plus <i className="fa fa-angle-double-right"></i></a>
                </div>
            </div>
        );
    }
)

const Nosservicecomponent = () => {
        return (
            <div className="row nosservices">
                { singleService }
            </div>
        );
    }

export default Nosservicecomponent;
