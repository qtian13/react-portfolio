import React from 'react';

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
    <main className="container">
      <h1>
        Resume
      </h1>
      <p>
        Download my <a target="_blank" href="./files/QiushuangTianResume.pdf">resume</a>
      </p>
      <h2>Frontend Proficiencies</h2>
      <ul>
        {frontEndProficiencies.map((proficiency) => (
          <li>{proficiency}</li>
        ))}
      </ul>
      <h2>Backend Proficiencies</h2>
      <ul>
        {backEndProficiencies.map((proficiency) => (
          <li>{proficiency}</li>
        ))}
      </ul>

    </main>
  )
}

export default Resume;