import PropTypes from 'prop-types';
import React from 'react';
import {Book} from './Book';

export const BookList = ({books, navClosed}) => {
  let className = 'gallery';

  if (!navClosed) {
    className += ' filter-is-visible';
  }

  return (
    <section className={className}>
      {books.map(book => <Book key={book.title + book.cover} source={book} />)}
    </section>
  );
};

BookList.propTypes = {
  books: PropTypes.array.isRequired,
  navClosed: PropTypes.bool.isRequired
};
