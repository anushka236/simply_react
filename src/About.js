import React from 'react';
import { NavLink } from 'react-router-dom';
import web from "../src/images/rw10.gif";
import "./Home.css";
 

const About=()=>{
    return(
        <>
            <section id= "header" className="d-flex align-items-center">
            <div className="container-fluid nav-bg mr-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row">
                    <div className=" content col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                        <h1>Welcome to the<strong > About Section</strong></h1>
                        <h5 className="my-3">As the task of internship at <strong className="brand-name">Tathastu</strong></h5>
                        <div className="mt-3">
                            <NavLink to="/contact" className="btn btn-outline-primary">Contact Us</NavLink>
                        </div>
                    </div>

                    <div className="col-lg-6 order-1 order-lg-2 header-img">
                        <img src={web } alt="image"/>

                    </div>
                    </div>

                    </div>
                </div>
            </div>

            </section>
        </>

    )

}

export default About; 