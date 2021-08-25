import React from 'react';
import Navbar from './Navbar';

function HeaderBlock() {
  const text = 'header';

  return (
    <div>
      <Navbar />
      <p>Hello World! Here is {text}</p>
    </div>
  )
    
}

export default HeaderBlock;
