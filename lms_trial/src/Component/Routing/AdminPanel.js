import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import NewBookForm from '../bookComponent/Add_Book';
import DeleteBookForm from '../bookComponent/Delete_book';

import ListBooksComponent from '../bookComponent/BookComponent';
import ListEmployeeComponent from '../UserComponent/UserListCompo';
import DeleteUserById from '../UserComponent/Delete_user';
import Homepage from '../../Homepage';
import { ListGroupItem } from 'reactstrap';
import Logout from '../Log In/Logout';

const AdminPanel = () => {
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
              <Link to="/admin/list-books">List All the Books</Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="/admin/list-employees">List Library Users</Link>
            </ListGroupItem>
            
            <ListGroupItem>
              <Link to="/admin/new-book">Add New Book</Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="/admin/delete-book">Delete Book From Library</Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="/admin/delete-user">Delete User by ID</Link>
            </ListGroupItem>
            <ListGroupItem>
              <Link to="/admin/Logout">Logout</Link>
            </ListGroupItem>
           
          </ListGroup>
        </div>
        <div className="col-md-10">
          
          <Switch>
          <Route path="/home-page" component={Homepage} />

            <Route path="/admin/new-book">
              <NewBookForm />
            </Route>
            <Route path="/admin/delete-book">
              <DeleteBookForm />
            </Route>
            <Route path="/admin/delete-user">
              <DeleteUserById />
            </Route>
            <Route path="/admin/list-books">
              <ListBooksComponent />
            </Route>
            <Route path="/admin/Logout">
              <Logout />
            </Route>
            <Route path="/admin/list-employees">
              <ListEmployeeComponent />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
    </Router>
  );

};

export default AdminPanel;
