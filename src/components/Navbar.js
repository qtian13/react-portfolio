import React from 'react';

function navigationBar() {
  const text = 'navigation';

  // TODO: Add a comment explaining what JSX is and the significance of the curly braces
  // JSX is a syntax extension to JavaScript that looks like HTML.
  // JSX is compiled by something called "Babel" into widely supported ES5 syntax.
  // The curly braces allow us to pass values and expressions into our view.
  return <p className="container">Hello World! Here is {text}</p>;
}

export default navigationBar;
