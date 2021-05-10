import React, { useState } from 'react'

function JobList() {

    const [jobs] = useState([
        {
            company: 'VISTANA SIGNATURE EXPERIENCE / MARRIOTT VACATION CLUB',
            dates: 'SEPT 2018 - current',
            role: 'Interactive Design Developer',
            description: 'As a part of the team my responsibilities included email design, mini websites and landing pages, all within the Brand Standards. Also I was the lead designer for redesign of the Marriott Vacations Worldwide website.'
        },
        {
            company: 'US DOD COINS',
            dates: 'JAN 2016 - MAY 2018',
            role: 'FRONT END WEB DEVELOPMENT',
            description: 'Redesign of company website, advertising, email campaigns, and product design for clients.'
        },
        {
            company: 'MARRIOTT VACATION CLUB',
            dates: 'MAY 2014 - NOV 2015',
            role: 'FRONT END WEB DEVELOPMENT',
            description: 'Responsible for design of the internal User interface of Marriott Vacation Club System within the Marriott Brand standard. Design and develop web pages from initial Photoshop comps to prototype and live production using HTML, CSS and Javascript.'
        },
        {
            company: 'XULON PRESS',
            dates: 'MAY 2013 - MAR 2014',
            role: 'FRONT END WEB DEVELOPMENT',
            description: 'UI Design and frontend development of internal book buying admin system. Responsible for providing backend developers with HTML and CSS.'
        }
        ,{
            company: 'Softrock Inc',
            dates: 'SEPT 2010 - MAY 2013',
            role: 'GRAPHIC &amp; WEB DESIGNER',
            description: 'Design of various graphics on various media outlets (flyer, tv, desktop) used in and out of office. Design and develop from initial Photoshop comps to production using HTML and CSS. '
        }

    ])
    return (
        <>
            {jobs.map((job, i) => (
                
            <div className="event-item mb-5"  key={job.company} >
                <h3>{job.company}</h3>
                <h4>{job.role} {job.dates}</h4>
                <ul className="event-details list-unstyled">
                    <li><p>{job.description}</p></li>
                </ul>
            </div>
        ))}
        </>
    );

}
export default JobList;
