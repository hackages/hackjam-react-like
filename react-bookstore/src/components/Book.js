import React from 'react';
import PropTypes from 'prop-types';

export const Book = ({source}) => {
  return (
    <li>
      <img src={source.cover} alt="Book cover" />
    </li>
  );
};

Book.propTypes = {
  source: PropTypes.object.isRequired
};
