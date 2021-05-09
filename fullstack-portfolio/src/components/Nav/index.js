import React from 'react';
import {Route, BrowserRouter as Router, Link} from 'react-router-dom';


function Nav(props) {
    
    const {
        isAbout,
        setIsAbout,
        isPortfolio,
        setIsPortfolio,
        isContact,
        setIsContact,
        isResume,
        setIsResume
    } = props;

    return (
        <header>
            <nav className="navbar fixed-top navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="#about">JMAX DESIGNS</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className='nav-link' to="/">About</Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/portfolio">Portfolio</Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/contact">Contact</Link>
                                
                            </li>
                            <li className="nav-item">
                                <Link className='nav-link' to="/resume">Resume</Link>
                                
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav;