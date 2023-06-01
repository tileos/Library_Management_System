import React from 'react';
import { useHistory } from 'react-router-dom';
import Login from './LogIn';

const Logout = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Clear user data from local storage
    localStorage.removeItem('userID');

    // Redirect to login page
    history.push('localhost:3000');
  };

  return (
    <div className="container">
      {/* <h3>Logout</h3>
      <button className="btn btn-primary" onClick={handleLogout}>
        Logout
      </button> */}

      {/* <Login /> Include the Login component */}
    </div>
  );
};

export default Logout;
