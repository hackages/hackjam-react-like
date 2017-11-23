import React from 'react';
import PropTypes from 'prop-types';
import {FilterItem} from './FilterItem';

export const FilterList = ({filters, selectTab}) => {
  const FilterItems = filters.map(filter => (
    <FilterItem key={filter.category} filter={filter} selectTab={selectTab} />
  ));

  return (
    <ul>
      <li className="placeholder">
        <a data-type="all" href="#0">
          All
        </a>
      </li>
      {FilterItems}
    </ul>
  );
};

FilterList.propTypes = {
  filters: PropTypes.array.isRequired,
  selectTab: PropTypes.func.isRequired
};

