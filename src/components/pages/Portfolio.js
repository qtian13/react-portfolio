import React from 'react';
// import { FaProjectDiagram } from 'react-icons/fa';
import Card from '../card/Card';

const project1 = {
  id: "project1",
  name: "CLOVE",
  skills: "CSS/JavaScript/NodeJS/Express/Handlebars/Sequelize/Cloudinary/Heroku",
  deployed: "https://still-reef-24172.herokuapp.com/",
  github: "https://github.com/qtian13/CLOVE",
  demo: "./assets/images/clove.png"
};

const project2 = {
  id: "project2",
  name: "Feed Your Boredom",
  skills: "HTML/CSS/Bulma/JavaScript/jQuery/Openlayers",
  deployed: "https://qtian13.github.io/FeedYourBoredom/",
  github: "https://github.com/qtian13/FeedYourBoredom",
  demo: "./assets/images/feedYourBoredom.png"
};

const project3 = {
  id: "project3",
  name: "Workout Tracker",
  skills: "CSS/JavaScript/NodeJS/MongoDB/Mongoose/Heroku",
  deployed: "https://whispering-hamlet-60494.herokuapp.com/",
  github: "https://github.com/qtian13/workout-tracker",
  demo: "./assets/images/workoutTracker.png"
};

const project4 = {
  id: "project4",
  name: "Weather Dashboard",
  skills: "HTML/CSS/Bootstrap/JavaScript/jQuery",
  deployed: "https://qtian13.github.io/Weather-Dashboard/",
  github: "https://github.com/qtian13/Weather-Dashboard",
  demo: "./assets/images/weatherDashboard.png"
};

const project5 = {
  id: "project5",
  name: "Code Quiz",
  skills: "CSS/JavaScript/NodeJS/Express/Handlebars/Sequelize/Cloudinary/Heroku",
  deployed: "https://still-reef-24172.herokuapp.com/",
  github: "https://github.com/qtian13/code-quiz",
  demo: "./assets/images/codeQuiz.png"
};

const project6 = {
  id: "project6",
  name: "Password Generator",
  skills: "HTML/CSS",
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
      <h1>
        Portfolio
      </h1>
      <div class="row block-descr block-descr-box project-display">
        {projects.map((project) => (
          <div className="col-12 col-md-6 my-3 px-2" style={{"height": "300px" }}>
            <Card name={project.name} skills={project.skills} deployed={project.deployed} github={project.github} demo={project.demo}/>
          </div>
        ))}
      </div>
    </main>
  )
}

export default Portfolio;