import React from 'react';
import { FaGithub, FaLinkedin, FaCopyright } from 'react-icons/fa'
function FooterBlock() {
    let date = new Date();
    let year = date.getFullYear();
    return (
<footer>

  <div>

    <div className="row">

      <div className="col-md-12 py-5">
        <div className="mb-5 flex-center">
          <a className="mr-5 d-block" href="https://www.linkedin.com/in/qiushuang-tian-a9754248/">
            <FaLinkedin />
          </a>
          <a className="ml-5 d-block" href="https://github.com/qtian13">
            <FaGithub />
          </a>
        </div>
      </div>

    </div>

  </div>

  <div class="footer-copyright text-center">
    Qiushuang Tian <FaCopyright /> 
  </div>
</footer>

  );
}

export default FooterBlock;
