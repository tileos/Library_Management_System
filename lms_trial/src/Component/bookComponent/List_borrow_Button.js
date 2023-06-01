import { Component } from "react";
import bookService from "../../Service/Book_Service";
import BorrowBookForm from "./BorrowBook";

class List_Borrow_Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBorrowForm: false, // Track the visibility of the BorrowBookForm
      selectedBook: null, // Store the selected book for borrowing
    };
  }

  componentDidMount() {
    bookService.getUserList().then((res) => {
      this.setState({ books: res.data });
    });
  }

  // Handle the button click to show the BorrowBookForm
  handleBorrowClick = (book) => {
    this.setState({
      showBorrowForm: true,
      selectedBook: book,
    });
  };

  // Handle the close event of the BorrowBookForm
  handleCloseForm = () => {
    this.setState({
      showBorrowForm: false,
      selectedBook: null,
    });
  };

  render() {
    return (
      <div>
        <div>
          <div>
            <div className="container">
              {this.state.showBorrowForm && ( // Render BorrowBookForm if showBorrowForm is true
                <BorrowBookForm
                  book={this.state.selectedBook}
                  handleCloseForm={this.handleCloseForm}
                />
              )}
              <table className="table table-striped table-bordered table-hover table-center">
                <thead>
                  <tr style={{ background: "lightgreen" }}>
                    <th>Book ID</th>
                    <th>Book Name</th>
                    <th>Author Name</th>
                    <th>ISBN no.</th>
                    <th>Subject</th>
                    <th>Publications</th>
                    <th>Available Quantity</th>
                    <th>Total Quantity</th>
                    <th>Borrow</th> {/* Add new column header */}
                  </tr>
                </thead>
                <tbody>
                  {this.state.books.map((book) => (
                    <tr key={book.bookID}>
                      <td>{book.bookID}</td>
                      <td>{book.title}</td>
                      <td>{book.author}</td>
                      <td>{book.isbn}</td>
                      <td>{book.subject}</td>
                      <td>{book.publisher}</td>
                      <td>{book.availableQuantity}</td>
                      <td>{book.totalQuantity}</td>
                      <td>
                        <button
                          onClick={() => this.handleBorrowClick(book)} // Pass the selected book as a parameter
                          className="btn btn-primary"
                        >
                          Borrow
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default List_Borrow_Button;
