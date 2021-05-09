import React from 'react';


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
                                <a className={`nav-link ${!isAbout && 'active'}`} href="#about" onClick={() => setIsAbout(true)}>About</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${!isPortfolio && 'active'}`} href="#portfolio" onClick={() => setIsPortfolio(true)}>Portfolio</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${!isContact && 'active'}`} href="#contact" onClick={() => setIsContact(true)}>Contact</a>
                            </li>
                            <li className="nav-item">
                                <a className={`nav-link ${!isResume && 'active'}`} href="#resume" onClick={() => setIsResume(true)}>Resume</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Nav;