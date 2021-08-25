import React from 'react';

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar w/ text</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
    </ul>
    <span class="navbar-text">
      Navbar text with an inline element
    </span>
  </div>
</nav> */
function Navbar({ currentPage, handlePageChange }) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light px-5">
      <a className="navbar-brand" href="/">Qiushuang Tian</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarText">
        <ul className="navbar-nav mr-auto">
          {/* <li className={currentPage === 'AboutMe' ? 'nav-item active' : 'nav-item'}> */}
          <li className="nav-item active">
            <a href="#AboutMe" onClick={() => handlePageChange('AboutMe')} className="nav-link">
              About Me
            </a>
          </li>
          <li className={currentPage === 'Portfolio' ? 'nav-item active' : 'nav-item'}>
            <a href="#Portfolio" onClick={() => handlePageChange('Portfolio')} className="nav-link">
              Portfolio
            </a>
          </li>
          <li className={currentPage === 'Contact' ? 'nav-item active' : 'nav-item'}>
            <a href="#Contact" onClick={() => handlePageChange('Contact')} className="nav-link">
              Contact
            </a>
          </li>
          <li className={currentPage === 'Resume' ? 'nav-item active' : 'nav-item'}>
            <a href="#Resume" onClick={() => handlePageChange('Resume')} className="nav-link">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;