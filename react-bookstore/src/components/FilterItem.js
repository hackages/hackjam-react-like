import React from 'react';
import PropTypes from 'prop-types';

export const FilterItem = ({filter, selectTab}) => {
  return (
    <li
      onClick={() => selectTab(filter.category)}
      style={{display: 'inline-style'}}
    >
      <a className={filter.selected ? 'selected' : ''} href="#0">
        {filter.category}
      </a>
    </li>
  );
};

FilterItem.propTypes = {
  filter: PropTypes.shape({
    category: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired
  }).isRequired,
  selectTab: PropTypes.func.isRequired
};
