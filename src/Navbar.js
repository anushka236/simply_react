import React from "react";
import "./Navbar.css";
import {NavLink} from "react-router-dom";
const Navbar=()=>{
    return(
        <>
        <div className="container-fluid nav_bg">
            <div className="row">
                <div className="col-10 mx-auto">


            <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div className="col-lg-11 ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="#">SIMPLY REACT</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse mt-4 mt-lg-0" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto  mb-lg-0 ">
        <li className="nav-item ">
          <NavLink className="nav-link active" exact aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link  " to="/about">About</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/service">Service</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link " to="/contact">Contact</NavLink>
        </li>


      </ul>

    </div>
  </div>
  </div>
</nav>
                </div>
            </div>

        </div>
        </>
    )
}

export default Navbar;