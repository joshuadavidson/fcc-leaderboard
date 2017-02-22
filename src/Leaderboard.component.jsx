/* establish global variables for ESLint */
/* global */

import React from 'react';
import $ from 'jquery';
import TableRow from './TableRow.component.jsx';
import TableHeadSort from './TableHeadSort.component.jsx';

export default class Leaderboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      sortedBy: '',
    };

    this.sortByTotalPoints = this.sortByTotalPoints.bind(this);
    this.sortByRecentPoints = this.sortByRecentPoints.bind(this);
  }

  // Load all the data upon initial mounting
  componentDidMount() {
    $.ajax('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    .then((data) => {
      this.setState({
        data,
        sortedBy: 'Total',
      });
    });
  }

  sortByTotalPoints() {
    $.ajax('https://fcctop100.herokuapp.com/api/fccusers/top/alltime')
    .then((data) => {
      this.setState({
        data,
        sortedBy: 'Total',
      });
    });
  }

  sortByRecentPoints() {
    $.ajax('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
    .then((data) => {
      this.setState({
        data,
        sortedBy: 'Recent',
      });
    });
  }

  render() {
    // generate a JSX object containing all of the rows of users
    const rows = this.state.data.map((user, index) =>
      (<TableRow key={user.username} rank={index + 1} data={user} />));

    return (
      <table className="table table-condensed table-bordered table-hover text-center">
        <thead>
          <tr>
            <th id="leaderboard-title" colSpan="4">FCC Brownie Points Leaderboard</th>
          </tr>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <TableHeadSort
              content="30 Days"
              onSort={this.sortByRecentPoints}
              showCaret={this.state.sortedBy === 'Recent'}
            />
            <TableHeadSort
              content="Total Points"
              onSort={this.sortByTotalPoints}
              showCaret={this.state.sortedBy === 'Total'}
            />
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    );
  }
}
