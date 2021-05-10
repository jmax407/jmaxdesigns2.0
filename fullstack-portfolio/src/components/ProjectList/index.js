import React, { useState } from 'react'

function ProjectList() {

    const [projects] = useState([
        {
            name: 'Sports Buzz',
            category: 'web app',
            image: '0.jpg',
            github: 'https://github.com/mrhumpherys/social-sports',
            live: 'https://sports-buzz.herokuapp.com/'
        },
        {
            name: 'Bored In the House',
            category: 'web app',
            image: '1.jpg',
            github: 'https://github.com/iiTONELOC/covid-master',
            live: 'https://iitoneloc.github.io/covid-master'
        },
        {
            name: 'The Tech Blog',
            category: 'web app',
            image: 'the-tech-blog.png',
            github: 'https://github.com/jmax407/tech-blog',
            live: 'https://jmax407.github.io/tech-blog/'
        },
        {
            name: 'Weather-Dashbooard',
            category: 'web app',
            image: 'weather-dashboard.png',
            github: 'https://github.com/jmax407/weather-dashboard',
            live: 'https://jmax407.github.io/weather-dashboard/'
        },
        {
            name: 'Horiseon',
            category: 'web app',
            image: 'horiseon.png',
            github: 'https://github.com/jmax407/horiseon',
            live: 'https://jmax407.github.io/horiseon/'
        },
        {
            name: 'Run Buddy',
            category: 'web app',
            image: 'run-buddy.png',
            github: 'https://github.com/jmax407/run-buddy',
            live: 'https://lernantino.github.io/run-buddy/'
        },
        {
            name: 'Marriott Vacations Worldwide',
            category: 'web site',
            image: 'mvw.jpg',
            github: 'http://marriottvacationsworldwide.com/',
            live: 'http://marriottvacationsworldwide.com/'
        },
        {
            name: 'US DOD Coins',
            category: 'web site',
            image: 'usdodcoins.jpg',
            github: 'https://usdodcoins.com/',
            live: 'https://usdodcoins.com/'
        }

    ])
    return(
            <>
            {projects.map((project, i) => (
                <div className="col-lg-4 col-md-6 mb-4" key={project.name}>
            <div className="project-container">
                <div className="project-details d-flex justify-content-center align-items-center">
                    <ul className="list-unstyled project-list text-center">
                        <li className="project-title">{project.name} </li>
                        <li><a href={project.github} target="_blank" rel="noreferrer"><i className="fab fa-github-alt"></i></a></li>
                        <li><a href={project.live} target="_blank" rel="noreferrer"><i className="fas fa-desktop"></i></a></li>
                    </ul>
                </div>
                <img src={require(`../../assets/images/${project.image}`).default} alt={project.name}  className="img-thumbnail" />
            </div>
            </div>
            ))} 
            </>
        
    )
}

export default ProjectList;
