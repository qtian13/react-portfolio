import React from 'react';
import { FaGithub, FaLinkedin, FaCopyright } from 'react-icons/fa'
function FooterBlock() {
    return (
      <div className="d-block w-100" style={{backgroundColor: "lightgray",position: "absolute", bottom: "0px"}}>
        <footer>
          <div className="d-flex justify-content-center my-2">
            <a className="d-inline-block mx-4 display-6" href="https://www.linkedin.com/in/qiushuang-tian-a9754248/">
              <FaLinkedin />
            </a>
            <a className="d-inline-block mx-4 display-6" href="https://github.com/qtian13">
              <FaGithub />
            </a>
          </div>

          <div className="text-center my-2">
            <FaCopyright />  Qiushuang Tian
          </div>
        </footer>
      </div>
      
  );
}

export default FooterBlock;