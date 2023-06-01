import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateBook = () => {
  const [bookData, setBookData] = useState({
    bookID: '',
    author: '',
    availableQuantity: 0,
    isbn: '',
    publicationDate: '',
    publisher: '',
    subject: '',
    title: '',
    totalQuantity: 0
  });

  useEffect(() => {
    const fetchBookData = async () => {
      try {
        const response = await axios.get(`http://localhost:9010/api/book/find/getBookByID?bookID=${bookData.bookID}`);
        const book = response.data;

        setBookData({
          bookID: book.bookID,
          author: book.author,
          availableQuantity: book.availableQuantity,
          isbn: book.isbn,
          publicationDate: book.publicationDate,
          publisher: book.publisher,
          subject: book.subject,
          title: book.title,
          totalQuantity: book.totalQuantity
        });
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (bookData.bookID !== '') {
      fetchBookData();
    }
  }, [bookData.bookID]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const updatedBookData = {
      bookID: bookData.bookID,
      author: document.getElementsByName('authorinput')[0].value,
      availableQuantity: bookData.availableQuantity,
      isbn: document.getElementsByName('isbninput')[0].value,
      publicationDate: document.getElementsByName('publicationdateinput')[0].value,
      publisher: document.getElementsByName('Publisherinput')[0].value,
      subject: document.getElementsByName('subjectinput')[0].value,
      title: document.getElementsByName('bookNameinput')[0].value,
      totalQuantity: document.getElementsByName('totalBooksinput')[0].value
    };

    axios.post(`http://localhost:9010/api/book/updateBook?bookID=${bookData.bookID}`, updatedBookData)
      .then(function(response) {
        console.log('Response:', response);
        // Handle response if needed
      })
      .catch(function(error) {
        console.error('Error:', error);
        // Handle error if needed
      });
  };

  const handleBookIDChange = (event) => {
    setBookData({
      ...bookData,
      bookID: event.target.value
    });
  };

  return (
    <div className="container pt-4 mt-5 my-3">
      <hr />
      <h1 className="text-center">
        <font size="8px">
          <b>Add Your Book</b>
        </font>
      </h1>
      <br />
      <form id="libraryForm" onSubmit={handleFormSubmit}>
        <div className="form-group row">
          <label htmlFor="bookID" className="col-sm-2 col-form-label">
            Book ID:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="bookIDinput"
              placeholder="Book ID"
              value={bookData.bookID}
              onChange={handleBookIDChange}
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label htmlFor="bookName" className="col-sm-2 col-form-label">
            Name:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="bookNameinput"
              placeholder="Book Name"
              value={bookData.title}
              onChange={(event) => setBookData({ ...bookData, title: event.target.value })}
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label htmlFor="author" className="col-sm-2 col-form-label">
            Author:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="authorinput"
              placeholder="Author Name"
              value={bookData.author}
              onChange={(event) => setBookData({ ...bookData, author: event.target.value })}
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label htmlFor="subject" className="col-sm-2 col-form-label">
            Subject:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="subjectinput"
              placeholder="Subject"
              value={bookData.subject}
              onChange={(event) => setBookData({ ...bookData, subject: event.target.value })}
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label htmlFor="isbn" className="col-sm-2 col-form-label">
            ISBN No:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="isbninput"
              placeholder="ISBN Number"
              value={bookData.isbn}
              onChange={(event) => setBookData({ ...bookData, isbn: event.target.value })}
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label htmlFor="publisher" className="col-sm-2 col-form-label">
            Publisher:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="Publisherinput"
              placeholder="Publisher of Book"
              value={bookData.publisher}
              onChange={(event) => setBookData({ ...bookData, publisher: event.target.value })}
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label htmlFor="publicationDate" className="col-sm-2 col-form-label">
            Publication Date:
          </label>
          <div className="col-sm-10">
            <input
              type="date"
              className="form-control"
              name="publicationdateinput"
              placeholder="Date of Publication Date"
              value={bookData.publicationDate}
              onChange={(event) => setBookData({ ...bookData, publicationDate: event.target.value })}
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label htmlFor="totalBooks" className="col-sm-2 col-form-label">
            Quantity:
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              name="totalBooksinput"
              placeholder="Total Books"
              value={bookData.totalQuantity}
              onChange={(event) => setBookData({ ...bookData, totalQuantity: event.target.value })}
            />
          </div>
        </div>
        <br />
        <div className="row">
          <div className="form-group row">
            <div className="col-lg-25 col-sm-15 mt-15" align="center">
              <div className="text-center">
                <button
                  type="submit"
                  className="btn text-light btn-large btn-block btn-center"
                  style={{ backgroundColor: '#eb7c38f3' }}
                >
                  ____Add Book____
                </button>
                <br /><br />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};


export default UpdateBook;
