import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ListBooksComponent from './BookComponent';
import { toast } from 'react-toastify';

const BorrowBookForm = () => {
  const [borrowData, setBorrowData] = useState({
    bookID: 0,
    dueDate: '',
    userID: 0,
  });

  const [books, setBooks] = useState([]);
  const loggedInUserID = localStorage.getItem('userID');

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = () => {
    axios
      .get('http://localhost:9010/api/book/getAllBooks')
      .then(function (response) {
        setBooks(response.data);
      })
      .catch(function (error) {
        console.error('Error:', error);
      });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setBorrowData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Use the logged in userID for borrowing
    const data = {
      ...borrowData,
      userID: loggedInUserID,
    };

    axios
      .post('http://localhost:9010/api/book/borrowBook', data)
      .then(function (response) {
        console.log('Borrow Book Response:', response);
        // Handle success or display a success message
        toast.success('You borrowed successfully', {
          icon: '🗸', // Success tick mark
          theme: 'dark', // Dark theme
          position: 'bottom-right', // Position at the bottom right
        });
      })
      .catch(function (error) {
        console.error('Error:', error);
        // Handle error or display an error message
      });
  };

  return (
    <div className="container pt-4 mt-5 my-3">
      <h1 className="text-center" style={{ backgroundColor: '#555556' }}>
        <font size="8px">
          <b>Borrow Book</b>
        </font>
      </h1>
      <hr />
      <ListBooksComponent />
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <label htmlFor="bookID">Book:</label>
          <select
            id="bookID"
            name="bookID"
            className="form-control"
            value={borrowData.bookID}
            onChange={handleInputChange}
          >
            <option value="0">Select a book</option>
            {books.map((book) => (
              <option key={book.bookID} value={book.bookID}>
                {book.title}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="dueDate">Due Date:</label>
          <input
            type="date"
            id="dueDate"
            name="dueDate"
            className="form-control"
            value={borrowData.dueDate}
            onChange={handleInputChange}
          />
        </div>
        <br />
        <div className="form-group">
          <button type="submit" className="btn btn-primary">
            Borrow
          </button>
        </div>
      </form>
    </div>
  );
};

export default BorrowBookForm;
