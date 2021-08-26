import React from 'react';
import '../styles/Header.css';
import Navigation from './Navigation';

function HeaderBlock({ currentPage, handlePageChange }) {
  return (
    <header>
      <div className="header-title-container">
        <a href="/react-portfolio">Qiushuang Tian</a>
      </div>
      <div className="navbar-container">
        <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </header>
  )
}

export default HeaderBlock;
