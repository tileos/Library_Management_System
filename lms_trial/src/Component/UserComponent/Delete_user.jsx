import React, { useState } from 'react';
import axios from 'axios';
import ListEmployeeComponent from './UserListCompo';
import { toast } from 'react-toastify';

const DeleteUserById = () => {
  const [userId, setUserId] = useState('');
  const [message, setMessage] = useState('');

  const handleUserIdChange = (event) => {
    setUserId(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    axios.delete(`http://localhost:9010/api/user/deleteUser?userID=${userId}`)

      .then(function(response) {
        console.log('Response:', response);
        setMessage(`User with ID ${userId} deleted successfully.`);
      })
      .catch(function(error) {
        console.error('Error:', error);
        setMessage(`Failed to delete user with ID ${userId}.`);
        toast.success(' User deleted successfully', {
          icon: '🗸', // Success tick mark
          theme: 'dark', // Dark theme
            position: 'bottom-right' // Position at the bottom right

        });  

      });
  };

  return (
    <div className="container">
      
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <ListEmployeeComponent/>
          <hr />
          <h1 className="text-center" style={{ backgroundColor: 'red' }}>
        <font size="8px">
          <b>Delete User by ID</b>
        </font>
      </h1>
        <label htmlFor="bookName" className="col-sm-2 col-form-label">
           User id To delete :
          </label>          
          <input 
            type="text"
            className="form-control"
            id="userId"
            placeholder='enter userID'
            value={userId}
            onChange={handleUserIdChange}


          />
        </div>
      <br /><br />
        <button type="submit" className="btn btn-danger" style={{ backgroundColor: '#555556' }}>Delete User</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteUserById;
