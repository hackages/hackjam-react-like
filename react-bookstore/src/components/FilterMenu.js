import PropTypes from 'prop-types';
import React from 'react';
import {FilterList} from './FilterList';

export const FilterMenu = ({selectTab, filters}) => {
  return (
    <div className="tab-filter-wrapper">
      <div className="tab-filter">
        <FilterList filters={filters} selectTab={selectTab} />
      </div>
    </div>
  );
};

FilterMenu.propTypes = {
  selectTab: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired
};
