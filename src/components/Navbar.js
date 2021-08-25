import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light px-5">
      <a className="navbar-brand" href="/">Qiushuang Tian</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a href="#AboutMe" onClick={() => handlePageChange('AboutMe')} className={currentPage === 'AboutMe' ? 'nav-link active' : 'nav-link'}>
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a href="#Portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active' : 'nav-link'}>
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a href="#Contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
              Contact
            </a>
          </li>
          <li className="nav-item">
            <a href="#Resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;