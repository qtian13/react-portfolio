import React from 'react';
import '../../styles/AboutMe.css';

function AboutMe() {
  return (
    <main className="container mt-5">
      <h2>About Me</h2>
      <img id="profile-photo" className="d-block mx-auto" src="./assets/images/profile.jpg" alt="profile" />
      <p className="about-description mx-auto">
        Hi there! Welcome to my portfolio page!
      </p>
      <p className="about-description mx-auto">
        My name is Qiushuang Tian. I just graduated recently from UC Berkeley Extention, Coding Boot Camp with average academic of A+! 
      </p>
      <p className="about-description mx-auto">
        I have so much fun working on different projects by myself or together with my team during the course. They improve my ability on all kinds of web development skills like HTML/CSS/Javascript. I also develope full-stack applications in MVC(Model-View-Controller) structure with APIs and database like MySQL/Sequelize and MongoDB/Mongoose.
      </p>
      <p className="about-description mx-auto">
        The portfolio page presents several among them. You can check out deployed page and Github link with a simple click!
      </p>
      <p className="about-description mx-auto">
        If you consider me as a potential software developer candidate or have any advice, please email me at qiushuang.tian@gmail.com or click on icons below to contact me!
      </p>
      <div className="bottom-place-holder"></div>
    </main>
  )
}

export default AboutMe;