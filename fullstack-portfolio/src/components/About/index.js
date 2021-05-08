import React from 'react';

function About() {
    return (
        <main>
    <section>
        <div className="hero">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-10 col-xl-12">
                        <div className="hero-content">
                            <h1>Hi I'm Julius, a Web Designer &amp; Fullstack Developer out of Orlando, FL.</h1>
                            <h2>I always enjoyed art &amp; computers then I was able to translate that into a
                                career. Learn more <a href="">about me</a> below or please, take a look at my <a
                                    href="">portfolio</a> &amp; <a href="">resume</a>. <a href="#">Contact me</a>
                                 with any questions or concerns.</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xxl-10 col-xl-12">
                    <div className="section">
                        <h2 className="title">Education</h2>
                        <div className="event-item">
                            <h3>Valencia College</h3>
                            <h4>2008-2010</h4>
                            <ul className="event-details">
                                <li>AS Degree in Graphic Technology for Print Design</li>
                                <li>AS Degree in Graphic Technology for Web Design</li>
                            </ul>
                        </div>

                        <div className="event-item">
                            <h3>Coding Bootcamp</h3>
                            <h4>2021</h4>
                            <ul className="event-details">
                                <li>Fullstack Web Development</li>
                            </ul>
                        </div>
                    </div>
                    <div className="section">
                        <h2 className="title">Employment History</h2>
                        <div className="event-item">
                            <h3>Marriott Vacation Club</h3>
                            <h4>Digital Designer 20-18-Current</h4>
                            <ul className="event-details">
                                <li>
                                    <p>As a part of the team my responsibilities included email design, mini
                                        websites and landing pages, all within the Brand Standards. Also I was the
                                        lead designer for redesign of the Marriott Vacations Worldwide website.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</main>
    )

}
export default About;