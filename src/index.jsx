/* establish global variables for ESLint */
/* global document */

import React from 'react';
import ReactDOM from 'react-dom';

import 'jquery';

// import custom components
import Header from './Header.component.jsx';
import Leaderboard from './Leaderboard.component.jsx';

// import custom styles for project
import './index.scss';

const App = function () {
  return (
    <div>
      <Header />
      <section className="container-fluid">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3">
            <p className="text-center">
              { "Click on the '30 Days' and 'Total Points' headers to pull new data and sort users." }
            </p>
            <Leaderboard />
          </div>
        </div>
      </section>
    </div>
  );
};

ReactDOM.render(
  <App />,
  document.getElementById('app'),
);
