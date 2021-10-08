import React from 'react';
import { FaGithub, FaLinkedin, FaCopyright } from 'react-icons/fa';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import '../styles/Footer.css';

function FooterBlock() {
    return (
      // <div className="d-block w-100" style={{backgroundColor: "lightgray",position: "absolute", bottom: "0px"}}>
      <footer className="fixed-bottom">
        <div className="d-flex justify-content-center my-2">
          <a className="d-inline-block mx-4 display-6" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/qiushuang-tian-a9754248/">
            <FaLinkedin />
          </a>
          <a className="d-inline-block mx-4 display-6" rel="noreferrer" target="_blank" href="https://github.com/qtian13">
            <FaGithub />
          </a>
          <a className="d-inline-block mx-4 display-6" rel="noreferrer" target="_blank" href="mailto:qiushuang.tian@gmail.com">
            <HiOutlineMail />
          </a>
          <a className="d-inline-block mx-4 display-6" rel="noreferrer" target="_blank" href="tel:7346046389">
            <HiOutlinePhone />
          </a>
          
        </div>

        <div className="text-center my-2">
          <FaCopyright />  Qiushuang Tian
        </div>
      </footer>
  );
}

export default FooterBlock;