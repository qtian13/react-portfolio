import React from 'react';
import { FaGithub, FaPlay } from 'react-icons/fa';
const Card = ({ name, skills, deployed, github, demo }) => {
  return (
    <div
      className="project"
      style={{
        "background-image": `url("${demo}"), linear-gradient(rgba(245, 246, 252, 0), rgba(0, 0, 0, 0.2))`,
        "background-size": "100% 100%",
        "background-repeat": "no-repeat",
        "height": "97%",
        "width": "97%"
      }}
    >
      <div className="project-content">
        <h1 className="project-name">{name}</h1>
        <a href={deployed} target="_blank" rel="noreferrer">
          <FaPlay />
        </a>
        <a href={github} target="_blank" rel="noreferrer">
          <FaGithub />
        </a>
        <p className="project-skills">{skills}</p>
      </div>
    </div>
  )
}

export default Card;