import React, { Component } from "react";
import filters from "./mocks/filters";
import books from "./mocks/books";

class App extends Component {
  constructor() {
    super();
    this.state = {
      books,
      filters,
      navClosed: true
    };
  }

  selectTab(category) {
    // Your state contains a list of filters
    // They all have a selected property
    // You should update this selected property according to the category parameter you receive
    // You should also update the list of books in your state to filter them according to the category
  }

  closeSideBar() {
    // Should switch navClosed from false to true
  }

  openSideBar() {
    // Should switch navClosed from true to false
  }

  search(input) {
    // It should filter the list of books in your state according to the input you receive
    // Bonus: filter by input AND category
  }
  render() {
    const { books, filters, navClosed } = this.state;
    const { selectTab, closeSideBar, openSideBar, search } = this;

    let className = "gallery";

    if (!navClosed) {
      className += " filter-is-visible";
    }

    const FilterItems = filters.map(filter => (
      <li
        onClick={() => selectTab(filter.category)}
        style={{ display: "inline-style" }}
      >
        <a className={filter.selected ? "selected" : ""} href="#0">
          {filter.category}
        </a>
      </li>
    ));
    return (
        <header className="header">
          <div className="overlay">
            <div className="logo">
              <h1>Books by Hackages</h1>
            </div>
          </div>
        </header>
        <main className="main-content">
          <div className="tab-filter-wrapper">
            <div className="tab-filter">
              <ul>
                <li class="placeholder">
                  <a data-type="all" href="#0">
                    All
                  </a>
                </li>
                FilterItems
              </ul>
            </div>
          </div>

          <section className={{className}}>
            {books.map(book => (
              <li>
                <img src={book.cover} alt="Book cover" />
              </li>
            ))}
          </section>

          <div>
            <div className={{!navClosed ? "filter filter-is-visible" : "filter"}}>
              <form>
                <div className="filter-block">
                  <h4>Search</h4>
                  <div className="filter-content">
                    <input
                      type="search"
                      placeholder="title, price..."
                      onChange={search}
                    />
                  </div>
                </div>
              </form>
              <a href="#0" className="close" onClick={closeSideBar}>
                Close
              </a>
            </div>

            <a href="#0" className="filter-trigger" onClick={openSideBar}>
              Filters
            </a>
          </div>
        </main>
    );
  }
}

export default App;
