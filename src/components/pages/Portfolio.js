import React from 'react';
// import { FaProjectDiagram } from 'react-icons/fa';
import Card from '../card/Card';

const project1 = {
  id: "project1",
  name: "CLOVE",
  skills: "NodeJS/Express/Sequelize/Heroku",
  description: "Neighborhood grocery buy and sell",
  deployed: "https://still-reef-24172.herokuapp.com/",
  github: "https://github.com/qtian13/CLOVE",
  demo: "./assets/images/clove.png"
};

const project2 = {
  id: "project2",
  name: "Feed Your Boredom",
  skills: "HTML/CSS/Bulma/JavaScript/jQuery",
  description: "Help user decide what to do and where to go",
  deployed: "https://qtian13.github.io/FeedYourBoredom/",
  github: "https://github.com/qtian13/FeedYourBoredom",
  demo: "./assets/images/feedYourBoredom.png"
};

const project3 = {
  id: "project3",
  name: "Workout Tracker",
  skills: "CSS/JavaScript/NodeJS/MongoDB/Heroku",
  description: "Record and analysis daily workout",
  deployed: "https://whispering-hamlet-60494.herokuapp.com/",
  github: "https://github.com/qtian13/workout-tracker",
  demo: "./assets/images/workoutTracker.png"
};

const project4 = {
  id: "project4",
  name: "Weather Dashboard",
  skills: "HTML/CSS/Bootstrap/JavaScript/jQuery",
  description: "World weather at a glance",
  deployed: "https://qtian13.github.io/Weather-Dashboard/",
  github: "https://github.com/qtian13/Weather-Dashboard",
  demo: "./assets/images/weatherDashboard.png"
};

const project5 = {
  id: "project5",
  name: "Code Quiz",
  skills: "HTML/CSS/JavaScript",
  description: "Timed quiz to test coding knowledge",
  deployed: "https://still-reef-24172.herokuapp.com/",
  github: "https://github.com/qtian13/code-quiz",
  demo: "./assets/images/codeQuiz.png"
};

const project6 = {
  id: "project6",
  name: "Password Generator",
  skills: "HTML/CSS",
  description: "Generate customized password",
  deployed: "https://qtian13.github.io/password-generator/",
  github: "https://github.com/qtian13/password-generator",
  demo: "./assets/images/passwordGenerator.png"
};

const projects = [
  project1,
  project2,
  project3,
  project4,
  project5,
  project6
]

function Portfolio() {
  return (
    <main className="container mt-5">
      <h2>
        Portfolio
      </h2>
      <div class="row block-descr block-descr-box project-display">
        {projects.map((project) => (
          <div className="col-12 col-md-6 my-3 px-2" style={{"height": "300px" }}>
            <Card id={project.id} name={project.name} skills={project.skills} description={project.description} deployed={project.deployed} github={project.github} demo={project.demo}/>
          </div>
        ))}
      </div>
      <div className="bottom-place-holder"></div>
    </main>
  )
}

export default Portfolio;