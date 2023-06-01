import React, { useState } from 'react';
import axios from 'axios';
import ListBooksComponent from './BookComponent';

const BookSearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios
      .get(`http://localhost:9010/api/book/find/findBook?author=${searchTerm}`)
      .then(function (response) {
        console.log('Response:', response);
        setSearchResults(response.data); // Update search results
      })
      .catch(function (error) {
        console.error('Error:', error);
      });
  };

  return (
    <div className="container pt-4 mt-5 my-3">
      <h1 className="text-center" style={{ backgroundColor: '  #555556' }}>
        <font size="8px">
          <b> Search book from Library</b>
        </font>
      </h1>
      <br />
      <form onSubmit={handleFormSubmit}>
        <div className="form-group row">
          <div className="col-sm-4">
            <input
              type="text"
              className="form-control"
              placeholder="Search by Auther"
              value={searchTerm}
              onChange={handleInputChange}
            />
          </div>
          <div className="col-sm-2">
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </div><br />
          <br />
          <hr />
          {searchResults.length > 0 && (
        <div className="mt-4">
          <h3>Search Results:</h3>
          <ul>
            {searchResults.map((book) => (
              <li key={book.bookID}>
                <strong>Title:</strong> {book.bookID}<br />
                <strong>Title:</strong> {book.title}<br />
                <strong>Author:</strong> {book.author}<br />
                <strong>ISBN:</strong> {book.isbn}<br />
                <strong>Published:</strong> {book.published}<br />
              </li>
            ))}
          </ul>
        </div>
      )}
          <br />
          <ListBooksComponent/>
        </div>
      </form>

    </div>
  );
};

export default BookSearchBar;
