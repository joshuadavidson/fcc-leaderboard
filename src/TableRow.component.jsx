/* establish global variables for ESLint */
/* global */

import React from 'react';

export default TableRow;

function TableRow(props) {
  return (
    <tr>
      <td>{props.rank}</td>
      <td className="username-data-cell">
        <a
          href={`https://freecodecamp.com/${props.data.username}`}
        >
          <img
            className="avatar"
            src={props.data.img}
            role="presentation"
          />
          {props.data.username}
        </a>
      </td>
      <td>{props.data.recent}</td>
      <td>{props.data.alltime}</td>
    </tr>
  );
}

TableRow.propTypes = {
  rank: React.PropTypes.number.isRequired,
  data: React.PropTypes.object.isRequired,
};
