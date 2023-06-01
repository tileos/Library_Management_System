import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const ReturnBookComponent = () => {
  const [bookID, setBookID] = useState('');
  const userID = localStorage.getItem('userID');

  const handleReturnBook = () => {
    const data = {
      bookID: Number(bookID),
      userID: Number(userID),
    };

    axios
      .put('http://localhost:9010/api/book/returnBook', data)
      .then(function (response) {
        console.log('Return Book Response:', response);
        // Handle success or display a success message
        toast.success('Book returned successfully', {
          theme: 'dark',
          position: 'bottom-right',
        });
      })
      .catch(function (error) {
        console.error('Return Book Error:', error);
        // Handle error or display an error message
        toast.error('Failed to return book', {
          theme: 'dark',
          position: 'bottom-right',
        });
      });
  };

  return (
    <div className="container pt-4 mt-5 my-3">
            <h1 className="text-center" style={{ backgroundColor: '#555556' }}>
        <font size="8px">
            <b>Return Book</b>
        </font>
        </h1>
      <hr />
      <form>

        <div className="cotainer-fluid">
          <label htmlFor="bookID">Book ID:</label>
          <input
            type="text"
            id="bookID"
            name="bookID"
            className="form-control"
            value={bookID}
            onChange={(e) => setBookID(e.target.value)}
          />
          
        </div>
        <br />
        <div className="cotainer-fluid">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleReturnBook}
            style={{ backgroundColor: 'red' }}
          >
            Return Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReturnBookComponent;
