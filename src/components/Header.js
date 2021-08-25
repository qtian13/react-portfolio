import React from 'react';
import Navbar from './Navbar';
import '../styles/style.css';

function HeaderBlock({ currentPage, handlePageChange }) {
  return (
    <header>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    </header>
  )
}

export default HeaderBlock;
