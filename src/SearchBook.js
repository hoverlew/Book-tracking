import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';


export default class SearchBook extends Component {

  state = {
    searchResults: [],
    query: ''
  }

  search = (e) => {
    const query = e.target.value;
    this.setState({query: query})

    if (!query) {
      this.setState({searchResults: []});
      return;
    }

    BooksAPI.search(query, 20).then(searchResults => {
      if (searchResults.error) {
        searchResults = [];
      }

      if (query === this.state.query) {
        // 如果此查询的返回是执行的最后一个，
        // 更新搜索结果

        searchResults = searchResults.map((book) => {
          const alreadyInShelf = this.props.books.find(b => b.id === book.id);
          if (alreadyInShelf) {
            book.shelf = alreadyInShelf.shelf;
          }else{
            book.shelf = "none";
          }
          return book;
        });

        this.setState({searchResults});
      }
    });
  };

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" placeholder="Search by title or author" onChange={this.search}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.searchResults && this.state.searchResults.map(book => (
              <li key={book.id}>
                  <Book book={book} onShelfChange={this.props.onShelfChange}/>
              </li>
            ))}
          </ol>
        </div>
      </div>
    );
  }
}