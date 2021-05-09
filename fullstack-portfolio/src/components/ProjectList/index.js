import React, { useState } from 'react'

function ProjectList({  }) {

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
        }

    ])
    return(
            <>
            {projects.map((project, i) => (
                <div className="col-md-6">
            <div className="project-container">
                <div className="project-details">
                    <ul className="list-unstyled project-list">
                        <li className="project-title">{project.name} </li>
                        <li><a href={project.github} target="_blank"><i className="fab fa-github-alt"></i></a></li>
                        <li><a href={project.live} target="_blank"><i className="fas fa-desktop"></i></a></li>
                    </ul>
                </div>
                <img src={require(`../../assets/images/${project.image}`).default} alt={project.name} key={project.name} className="img-thumbnail" />
            </div>
            </div>
            ))} 
            </>
        
    )
}

export default ProjectList;
