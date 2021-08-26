import React from 'react';
import { FaGithub, FaPlay } from 'react-icons/fa';
import '../../styles/Card.css';

const Card = ({ name, description, skills, deployed, github, demo }) => {
  return (
    <div
      className="project m-auto"
      style={{
        "background-image": `url("${demo}"), linear-gradient(rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2))`,
        "background-size": "100% 100%",
        "background-repeat": "no-repeat",
        "height": "97%",
        "width": "97%"
      }}
    >
      <div className="project-content flex-column justify-content-center hide">
        <h3 className="project-name text-center mb-1">{name}</h3>
        <h3 className="project-description text-center mx-auto mb-0"><small>{description}</small></h3>
        <div className="text-center my-3">
          <a className="app-link" href={deployed} target="_blank" rel="noreferrer">
            <FaPlay />
          </a>
          <a className="app-link d-inline-block mx-3" href={github} target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
        </div>
        <p className="project-skills text-center mx-auto">{skills}</p>
      </div>
    </div>
  )
}

export default Card;