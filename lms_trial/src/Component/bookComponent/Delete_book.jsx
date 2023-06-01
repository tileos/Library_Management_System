import React, { useState } from 'react';
import axios from 'axios';
import ListBooksComponent from './BookComponent';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const DeleteBookForm = () => {
  const [bookId, setBookId] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios
      .delete(`http://localhost:9010/api/book/deleteBook?bookID=${bookId}`)
      .then(function (response) {
        console.log('Response:', response);
        // toast.success(`Book with ID ${bookId} is deleted`); 

        toast.success(`Book with ID ${bookId} is deleted`, {
          icon: '🗸', // Success tick mark
          theme: 'dark', // Dark theme
            position: 'bottom-right' // Position at the bottom right

        });  

      })
      .catch(function (error) {
        console.error('Error:', error);
        toast.error('Failed to delete book'); // Show error message
      });
  };

  const handleInputChange = (event) => {
    setBookId(event.target.value);
  };

  return (
    <div className="container pt-4 mt-5 my-3">
      <ListBooksComponent />
      <hr />
      <h1 className="text-center" style={{ backgroundColor: '  #555556' }}>
        <font size="8px">
          <b>Delete Book by ID</b>
        </font>
      </h1>
      <br />
      <form onSubmit={handleFormSubmit}>
        <div className="form-group row">
          <label htmlFor="bookId" className="col-sm-2 col-form-label">
            Book ID:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="bookId"
              placeholder="Enter Book ID"
              value={bookId}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-lg-5 col-sm-5 mt-3" align="center">
            <button
              type="submit"
              className="btn text-light btn-large btn-block btn-center"
              style={{ backgroundColor: 'red' }}
            >
              Delete Book
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DeleteBookForm;
