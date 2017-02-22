/* establish global variables for ESLint */
/* global */

import React from 'react';

export default TableHeadSort;

function TableHeadSort(props) {
  function handleClick(event) {
    event.preventDefault();
    props.onSort();
  }

  return (
    <th>
      <a
        title="Sort by Recent Points"
        href=""
        onClick={handleClick}
      >
        {props.showCaret ? (`${props.content}  ▼`) : (props.content)}
      </a>
    </th>
  );
}

TableHeadSort.propTypes = {
  onSort: React.PropTypes.func.isRequired,
  content: React.PropTypes.string.isRequired,
  showCaret: React.PropTypes.bool.isRequired,
};
