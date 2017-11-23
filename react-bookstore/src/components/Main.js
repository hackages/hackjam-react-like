import React, {Component} from 'react';
import books from '../mocks/books';
import filters from '../mocks/filters';
import {BookList} from './BookList';
import {FilterMenu} from './FilterMenu';
import {SideBarFilters} from './SideBarFilters';

export class Main extends Component {
  constructor() {
    super();
    this.state = {
      books,
      filters,
      navClosed: true,
      selectedCategory: 'All',
      inputValue: ""
    };

    this.selectTab = this.selectTab.bind(this);
    this.closeSideBar = this.closeSideBar.bind(this);
    this.openSideBar = this.openSideBar.bind(this);
    this.search = this.search.bind(this);
  }

  selectTab(category) {
    this.setState({
      selectedCategory: category,
      filters: filters.map(filter => {
        filter.selected = filter.category === category;
        return filter;
      })
    });
    this.filterBooks(this.state.inputValue, category)
  }

  closeSideBar() {
    this.setState({
      navClosed: true
    });
  }

  openSideBar() {
    this.setState({
      navClosed: false
    });
  }

  search(input) {
    const value = input.target.value;
    this.setState({inputValue: value});
    this.filterBooks(value, this.state.selectedCategory)
  }

  filterBooks = (input, category) => {
    this.setState({
      books: books.filter(book => !input || book.title.toLowerCase().includes(input.toLowerCase())).filter(book => category === 'All' || book.category === category)
    })
  };

  render() {
    const {books, filters, navClosed} = this.state;

    return (
      <main className="main-content">
        <FilterMenu filters={filters} selectTab={this.selectTab}/>

        <BookList books={books} navClosed={navClosed}/>

        <SideBarFilters
          navClosed={navClosed}
          closeSideBar={this.closeSideBar}
          onChange={this.search}
          openSideBar={this.openSideBar}
        />
      </main>
    );
  }
}
