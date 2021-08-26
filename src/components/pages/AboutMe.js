import React from 'react';
import '../../styles/AboutMe.css';

function AboutMe() {
  return (
    <main className="container mt-5">
      <h2>About Me</h2>
      <img id="profile-photo" className="d-block mx-auto" src="./assets/images/profile.jpg" alt="profile" />
      <p className="about-description mx-auto">
        Hi there! Welcome to my portfolio page! My name is Qiushuang Tian. I am a student of UC Berkeley Extention, Coding Boot Camp. I have so much fun working on different projects together with my team and do learn a lot on all kinds of web development skills! 
      </p>
      <p className="about-description mx-auto">
        This page presents several projects I recently finished. You can check out deployed page and Github link with a simple click!
      </p>
      <p className="about-description mx-auto">
        If you consider me as a potential software developer candidate or have any advice, please do not hesitate to contact me! 
      </p>
      <div className="bottom-place-holder"></div>
    </main>
  )
}

export default AboutMe;