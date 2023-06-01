import React, { useState } from 'react';

const AdminLogin = () => {
  const [adminID, setAdminID] = useState('');
  const [adminEmail, setAdminEmail] = useState('');
  const [adminPassword, setAdminPassword] = useState('');
  const [error, setError] = useState('');

  const handleAdminIDChange = (e) => {
    setAdminID(e.target.value);
  };

  const handleAdminEmailChange = (e) => {
    setAdminEmail(e.target.value);
  };

  const handleAdminPasswordChange = (e) => {
    setAdminPassword(e.target.value);
  };

  const handleAdminLogin = () => {
    // Make an API call to retrieve the admin's email and password
    const apiUrl = `http://localhost:9010/api/admin/getAdminByIdNumber?adminID=${adminID}`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const admin = data.admin; // Assuming the response JSON has an 'admin' object with email and password fields

        // Check and validate the admin's email and password
        if (admin.email === adminEmail && admin.password === adminPassword) {
          // Successful admin login logic
          console.log('Admin logged in');
        } else {
          setError('Invalid admin email or password');
        }
      })
      .catch((error) => {
        setError('An error occurred while logging in');
        console.error(error);
      });
  };

  return (
    <div className="container pt-4 mt-5 my-3">
      <label className="col-sm-10 col-form-label">
        <h3>Welcome..! Please Log In To Continue as Admin</h3>
      </label>

      <hr />
      <div className="form-group row">
        <label htmlFor="adminId" className="col-sm-2 col-form-label">
          Admin ID:
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id="adminId"
            placeholder="Admin ID"
            value={adminID}
            onChange={handleAdminIDChange}
          />
        </div>
      </div><br />
      <div className="form-group row">
        <label htmlFor="adminEmail" className="col-sm-2 col-form-label">
          Email:
        </label>
        <div className="col-sm-5">
          <input
            type="email"
            className="form-control"
            id="adminEmail"
            placeholder="Email"
            value={adminEmail}
            onChange={handleAdminEmailChange}
          />
        </div>
      </div>
      <br />
      <div className="form-group row">
        <label htmlFor="adminPassword" className="col-sm-2 col-form-label">
          Password:
        </label>
        <div className="col-sm-5">
          <input
            type="password"
            className="form-control"
            id="adminPassword"
            placeholder="Password"
            value={adminPassword}
            onChange={handleAdminPasswordChange}
          />
        </div>
      </div>

      {error && <p>{error}</p>}

      <div className="form-group row">
        <div className="col-lg-2 col-sm-1 mt-3" align="center">
          <button
            type="submit"
            className="btn text-light btn-large btn-block btn-center"
            style={{ backgroundColor: 'orangered' }}
            onClick={handleAdminLogin}
          >
            Log In as Admin
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
