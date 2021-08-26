import React from 'react';
import '../styles/Header.css';
import Navbar from './Navbar';

function HeaderBlock({ currentPage, handlePageChange }) {
  return (
    <header>
      <div className="header-title-container">
        <a href="/react-portfolio">Qiushuang Tian</a>
      </div>
      <div className="navbar-container">
        <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
    </header>
  )
}

export default HeaderBlock;
