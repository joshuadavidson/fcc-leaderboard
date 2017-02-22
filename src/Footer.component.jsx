/* establish global variables for ESLint */
/* global */

import React from 'react';

export default Footer;

function Footer() {
  return (
    <footer>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-md-offset-3 text-center">
            <a href="https://jwaynedavidson.com"><img className="responsive" height="25" src="https://jwaynedavidson.com/img/jdblack.svg" alt="JD Logo" /></a><br />
            Coded by <a href="https://jwaynedavidson.com">Joshua Davidson</a><br />
          </div>
        </div>
      </div>
    </footer>
  );
}
