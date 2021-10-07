import React from 'react';
import { FaRegFilePdf } from 'react-icons/fa';
import '../../styles/Resume.css';

const frontEndProficiencies = [
  'HTML',
  'CSS',
  'JavaScript',
  'jQuery',
  'responsive design',
  'React',
  'Bootstrap',
  'Heroku'
];

const backEndProficiencies = [
  'APIs',
  'Node',
  'Express',
  'MySQL, Sequelize',
  'MongoDB, Mongoose',
  'REST',
  'GraphQL'
];


function Resume() {
  return (
    <main className="container mt-5">
      <h2>
        Resume
      </h2>
      <h3 className="d-6 text-center mx-auto">
        View and download my <a target="_blank" href="./assets/files/QiushuangTian.pdf"><FaRegFilePdf /> resume</a>
      </h3>
      <div className="d-flex justify-content-around">
        <div className="skills-section">
          <h4>Frontend Proficiencies</h4>
          <ul>
            {frontEndProficiencies.map((proficiency) => (
              <li>{proficiency}</li>
            ))}
          </ul>
        </div>
        <div className="skills-section">
          <h4>Backend Proficiencies</h4>
          <ul>
            {backEndProficiencies.map((proficiency) => (
              <li>{proficiency}</li>
            ))}
          </ul>
        </div>
      </div>
      <div className="bottom-place-holder"></div>
    </main>
  )
}

export default Resume;