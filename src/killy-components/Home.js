import React from 'react';
import {NavLink} from "react-bootstrap";

const Home = () => {
    return (
    <React.Fragment>
        <header id="header" className="fixed-top">
            <div className="container-fluid d-flex justify-content-between align-items-center">
                <h1 className="logo me-auto me-lg-0"><NavLink href="index.html">Kelly</NavLink></h1>
                <nav id="navbar" className="navbar order-last order-lg-0">
                    <ul>
                        <li><NavLink className="active" href="index.html">Home</NavLink></li>
                        <li><NavLink href="about.html">About</NavLink></li>
                        <li><NavLink href="resume.html">Resume</NavLink></li>
                        <li><NavLink href="services.html">Services</NavLink></li>
                        <li><NavLink href="portfolio.html">Portfolio</NavLink></li>
                        <li><NavLink href="contact.html">Contact</NavLink></li>
                    </ul>
                    <i className="bi bi-list mobile-nav-toggle"></i>
                </nav>
                <div className="header-social-links">
                    <NavLink href="#" className="twitter"><i className="bi bi-twitter"></i></NavLink>
                    <NavLink href="#" className="facebook"><i className="bi bi-facebook"></i></NavLink>
                    <NavLink href="#" className="instagram"><i className="bi bi-instagram"></i></NavLink>
                    <NavLink href="#" className="linkedin"><i className="bi bi-linkedin"></i></NavLink>
                </div>
            </div>
        </header>
        <section id="hero" className="d-flex align-items-center">
            <div className="container d-flex flex-column align-items-center" data-aos="zoom-in" data-aos-delay="100">
                <h1>Kelly Adams</h1>
                <h2>I'm a professional illustrator from San Francisco</h2>
                <NavLink href="about.html" className="btn-about">About Me</NavLink>
            </div>
        </section>
        <footer id="footer">
            <div className="container">
                <div className="copyright">
                    &copy; Copyright <strong><span>Kelly</span></strong>. All Rights Reserved
                </div>
                <div className="credits"> 
                    Designed by <NavLink href="https://bootstrapmade.com/">BootstrapMade</NavLink>
                </div>
            </div>
        </footer>
    </React.Fragment>)
};

export default Home;
