/* establish global variables for ESLint */
/* global */

import React from 'react';

export default Header;

function Header() {
  return (
    <header
      className="jumbotron text-center"
    >
      <img
        id="fcc-logo"
        src="https://www.freecodecamp.com/design-style-guide/downloads/freeCodeCamp.png"
        alt="FreeCodeCamp"
      />
    </header>
  );
}
