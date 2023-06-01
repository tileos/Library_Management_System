import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookSearchBar from '../bookComponent/SearchBook';
import Homepage from '../../Homepage';
import { ListGroupItem } from 'reactstrap';
import BorrowBookForm from '../bookComponent/BorrowBook';
import ListBooksComponent from '../bookComponent/BookComponent';
import ListBorrowedBooks from '../UserComponent/ListBorrowedBooks';
import Logout from '../Log In/Logout';

const UserPanel = () => {
  return (
    <Router>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2">
            <ListGroup>
              <ListGroupItem action>
                <Link to="/home-page">Go to Home</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to="/user/list-books">List All the Books</Link>
              </ListGroupItem>
              <ListGroupItem action>
                <Link to="/book-search">Book Search in Library</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to="/user/book-borrow">Borrow Book</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to="/user/borrowed-books">List Borrowed Books</Link>
              </ListGroupItem>
              <ListGroupItem>
                <Link to="/user/logout">Logout</Link>
              </ListGroupItem>
            </ListGroup>
          </div>
          
          <div className="col-md-10">
         

            <Switch>
              <Route path="/home-page" component={Homepage} />
              <Route path="/book-search" component={BookSearchBar} />
              <Route path="/user/borrowed-books" component={ListBorrowedBooks} />
              <Route path="/user/list-books" component={ListBooksComponent} />
              <Route path="/user/book-borrow" component={BorrowBookForm} />
              <Route path="/user/logout" component={Logout} />

            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default UserPanel;
