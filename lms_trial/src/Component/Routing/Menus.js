import React from 'react';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap';
import { Link, Route, Switch } from 'react-router-dom';
import NewBookForm from '../bookComponent/Add_Book';
import NewUserForm from '../UserComponent/Add_User';
import DeleteBookForm from '../bookComponent/Delete_book';
import BookSearchBar from '../bookComponent/SearchBook';
import ListBooksComponent from '../bookComponent/BookComponent';
import ListEmployeeComponent from '../UserComponent/UserListCompo';
import DeleteUserById from '../UserComponent/Delete_user';
import Homepage from '../../Homepage';



const MenuColumn = () => {
  return (
    <Container fluid>
      <Row>
        <Col md={2}>
          <ListGroup>
          <ListGroupItem action>
              <Link to="/home-page">Go to Home</Link>
            </ListGroupItem>
            <ListGroupItem action>
              <Link to="/Login-page">Login Page</Link>
            </ListGroupItem>
            <ListGroupItem action>
              <Link to="/new-book">New Book Form</Link>
            </ListGroupItem>
            <ListGroupItem action>
              <Link to="/new-user">New User Form</Link>
            </ListGroupItem>
            <ListGroupItem action>
              <Link to="/delete-user">Delete User Form</Link>
            </ListGroupItem>
            <ListGroupItem action>
              <Link to="/delete-book">Delete Book Form</Link>
            </ListGroupItem>
            <ListGroupItem action>
              <Link to="/book-search">Book Search Bar</Link>
            </ListGroupItem>
            <ListGroupItem action>
              <Link to="/list-books">List Books </Link>
            </ListGroupItem>
            <ListGroupItem action>
              <Link to="/list-employees">List Users </Link>
            </ListGroupItem>
          </ListGroup>
        </Col>
        <Col md={10}>
          <Switch>
          <Route path="/home-page" component={Homepage} />
          <Route path="/Login-page" component={Homepage} />
            <Route path="/new-book" component={NewBookForm} />
            <Route path="/new-user" component={NewUserForm} />
            <Route path="/delete-book" component={DeleteBookForm} />
            <Route path="/delete-user" component={DeleteUserById} />
            <Route path="/book-search" component={BookSearchBar} />
            <Route path="/list-books" component={ListBooksComponent} />
            <Route path="/list-employees" component={ListEmployeeComponent} />
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default MenuColumn;



