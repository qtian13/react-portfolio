import React from 'react';
import Navbar from './Navbar';

function HeaderBlock({ currentPage, handlePageChange }) {
  return (
    <div>
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    </div>
  )
}

export default HeaderBlock;
