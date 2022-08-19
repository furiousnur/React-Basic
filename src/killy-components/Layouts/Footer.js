import React from 'react';
import {NavLink} from "react-bootstrap";

const Footer = () => {
    return (
        <>
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
        </>
    );
};

export default Footer;
