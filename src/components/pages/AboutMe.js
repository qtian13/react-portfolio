import React from 'react';
import '../../styles/AboutMe.css';

function AboutMe() {
  return (
    <main className="container mt-5">
      <h1>About Me</h1>
      <img id="profile-photo" src="./assets/images/profile.jpg" alt="profile" />
      <p>
        Hi there! Welcome to my portfolio page! My name is Qiushuang Tian. I am a student of UC Berkeley Extention, Coding Boot Camp. I have so much fun working on different projects together with my team and do learn a lot on all kinds of web development skills! 
      </p>
      <p>
        This page presents several projects I recently finished. You can check out deployed page with a simple click! They are also pinned on my Github profile page. Please visit my Github page for more details.
      </p>
      <p>
        If you consider me as a potential software developer candidate or have any advice, please do not hesitate to contact me! 
      </p>
    </main>
  )
}

export default AboutMe;