import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import Homepage from './Homepage';
import NewUserForm from './Component/UserComponent/Add_User';
import Login from './Component/Log In/LogIn';



const OpenPage = () => {
  return (
    <Router>
      <div className="container pt-4 mt-5 my-3">
        <div className="row">
          <div className="col-lg-2">
            <div className="list-group">
              <Link to="/" className="list-group-item list-group-item-action">Homepage</Link>
              <Link to="/login" className="list-group-item list-group-item-action">Login</Link>
              <Link to="/new-user" className="list-group-item list-group-item-action">New User</Link>
            </div>
          </div>
          <div className="col-lg-1 vertical-line"></div>
          <div className="col-lg-9">
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/new-user" component={NewUserForm} />
          </div>
        </div>
      </div>

      <style>
        {`
          .vertical-line {
            border-left: 1px solid #ccc;
            height: 100%;
          }
        `}
      </style>
    </Router>
  );
};

export default OpenPage;

