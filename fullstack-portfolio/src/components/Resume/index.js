import React from 'react';
import JobList from '../JobList'

function Resume() {
  return (
    <section>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xxl-10 col-xl-12">
                    <div className="intro">
                        <div className="hero-content">
                            <h1>My Resume Page</h1>
                            <h2>As a FrontEnd Developer I have 10+ years experience working in the industry. I'm well versed in various industry standards and am always looking to expand my knowledge base.</h2>
                        </div>
                    </div>
                </div>
            </div>
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
                        <JobList />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}
export default Resume;