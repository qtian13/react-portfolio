import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg d-flex justify-content-between">
      <a className="navbar-brand" href="/react-portfolio">Qiushuang Tian</a>
      <div>
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