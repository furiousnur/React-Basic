import React from 'react';
import {NavLink} from "react-bootstrap";

const Navbar = () => {
    return (
        <>
            <header id="header" className="fixed-top">
                <div className="container-fluid d-flex justify-content-between align-items-center">
                    <h1 className="logo me-auto me-lg-0"><NavLink to="/">Kelly</NavLink></h1>
                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><NavLink className="active" to="/">Home</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                            <li><NavLink to="resume.html">Resume</NavLink></li>
                            <li><NavLink to="services.html">Services</NavLink></li>
                            <li><NavLink to="portfolio.html">Portfolio</NavLink></li>
                            <li><NavLink to="contact.html">Contact</NavLink></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>
                    <div className="header-social-links">
                        <NavLink to="#" className="twitter"><i className="bi bi-twitter"></i></NavLink>
                        <NavLink to="#" className="facebook"><i className="bi bi-facebook"></i></NavLink>
                        <NavLink to="#" className="instagram"><i className="bi bi-instagram"></i></NavLink>
                        <NavLink to="#" className="linkedin"><i className="bi bi-linkedin"></i></NavLink>
                    </div>
                </div>
            </header>            
        </>
    );
};

export default Navbar;
