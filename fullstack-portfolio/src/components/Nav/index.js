import React from 'react';

function Nav() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg">
        <div className="container">
            <a className="navbar-brand" href="index.html">JMAX DESIGNS</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                <ul className="navbar-nav mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="index.html">About</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="portfolio.html">Portfolio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="contact.html">Contact</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="resume.html">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}

export default Nav;