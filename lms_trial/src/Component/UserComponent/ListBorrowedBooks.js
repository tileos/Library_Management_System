import React, { Component } from "react";
import axios from "axios";
import ReturnBookComponent from "./ReturnBook";

class ListBorrowedBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {
      borrowedBooks: [],
    };
  }

  componentDidMount() {
    const loggedInUserID = localStorage.getItem("userID");

    axios
      .get(`http://localhost:9010/api/book/borrowedBooks?userID=${loggedInUserID}`)
      .then((response) => {
        this.setState({ borrowedBooks: response.data });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }

  handleReturnBook = (userID, bookID) => {
    const data = {
      userID: userID,
      bookID: bookID,
    };

    axios
      .post("http://localhost:9010/api/book/returnBook", data)
      .then((response) => {
        console.log("Return Book Response:", response);
        // Handle success or display a success message
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error or display an error message
      });
  };

  render() {
    return (
      <div className="container-fluid">
          <h1 className="text-center" style={{ backgroundColor: '#555556' }}>
        <font size="8px">
            <b> your Borrowing History</b>
        </font>
        </h1>
        <table className="table table-striped table-bordered table-hover table-center">
          <thead>
            <tr style={{ background: "lightgreen" }}>
              <th>Borrowing ID</th>
              <th>Book ID</th>
              <th>Title</th>
              <th>User ID</th>
              <th>Borrow Date</th>
              <th>Due Date</th>
              <th>Return Date</th>
              {/* <th>Actions</th> */}
            </tr>
          </thead>
          <tbody>
            {this.state.borrowedBooks.map((book) => (
              <tr key={book.borrowingID}>
                <td>{book.borrowingID}</td>
                <td>{book.book.bookID}</td>
                <td>{book.book.title}</td>
                <td>{book.user.userID}</td>
                <td>{book.borrowDate.join("/")}</td>
                <td>{book.dueDate.join("/")}</td>
                <td>{book.returnDate ? book.returnDate.join("/") : "Not Returned"}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
        
        <hr />
        <div>
            <ReturnBookComponent/>
        </div>

      </div>
    );
  }
}

export default ListBorrowedBooks;
