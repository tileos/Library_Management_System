import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const NewBookForm = () => {
  const [bookName, setBookName] = useState('');
  const [author, setAuthor] = useState('');
  const [subject, setSubject] = useState('');
  const [isbn, setIsbn] = useState('');
  const [publisher, setPublisher] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [totalBooks, setTotalBooks] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    const bookData = {
      title: bookName,
      author: author,
      subject: subject,
      isbn: isbn,
      publisher: publisher,
      publicationDate: publicationDate,
      totalQuantity: totalBooks
    };

    axios
      .post('http://localhost:9010/api/book/add-book', bookData)
      .then(function (response) {
        console.log('Response:', response);
        toast.success('Book added successfully', {
          icon: '🗸', // Success tick mark
          theme: 'dark', // Dark theme
            position: 'bottom-right' // Position at the bottom right

        });  
        })
      .catch(function (error) {
        console.error('Error:', error);
        toast.error('Failed to add book'); // Show error message
      });
  };

  return (
    <div className="container pt-4 mt-5 my-3">
      <h1 className="text-center" style={{ backgroundColor: '#555556' }}>
        <font size="8px">
          <b>Add new Book to Library</b>
        </font>
      </h1>
      <br />
      <form onSubmit={handleFormSubmit}>
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
              value={bookName}
              onChange={(e) => setBookName(e.target.value)}
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
              placeholder="Author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
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
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            />
          </div>
        </div>
        <br />

        <div className="form-group row">
          <label htmlFor="isbn" className="col-sm-2 col-form-label">
            ISBN:
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              name="isbninput"
              placeholder="ISBN"
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
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
              name="publisherinput"
              placeholder="Publisher"
              value={publisher}
              onChange={(e) => setPublisher(e.target.value)}
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
              placeholder="Publication Date"
              value={publicationDate}
              onChange={(e) => setPublicationDate(e.target.value)}
            />
          </div>
        </div>
        <br />

        <div className="form-group row">
          <label htmlFor="totalBooks" className="col-sm-2 col-form-label">
            Total Books:
          </label>
          <div className="col-sm-10">
            <input
              type="number"
              className="form-control"
              name="totalBooksinput"
              placeholder="Total Books"
              value={totalBooks}
              onChange={(e) => setTotalBooks(e.target.value)}
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
                  style={{ backgroundColor: 'red' }}
                >
                  ____Add Book____
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewBookForm;
