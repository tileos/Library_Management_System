import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';
import AdminPanel from '../Routing/AdminPanel';
import UserPanel from '../Routing/UserPanel';

const Login = () => {
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  const [role, setRole] = useState('');
  const [error, setError] = useState('');

  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.get(
        `http://localhost:9010/api/user/getUserByIdNumber?userID=${userId}`
      );
      const userData = response.data;

      if (userData && userData.password === password) {
        setRole(userData.role);
        setLoggedIn(true);
        toast.success('Login successful', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });

        // Save userID in local storage
        localStorage.setItem('userID', userId);

        // Navigate to homepage
        history.push('/home-page');
      } else {
        setError('Invalid credentials');
        toast.warning('Invalid credentials', {
          position: 'top-right',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'dark',
        });
      }
    } catch (error) {
      setError('Error occurred while logging in');
      // toast.error('Error occurred while logging in', {
      //   position: 'top-right',
      //   autoClose: 3000,
      //   hideProgressBar: false,
      //   closeOnClick: true,
      //   pauseOnHover: true,
      //   draggable: true,
      //   progress: undefined,
      //   theme: 'dark',
      // });
      console.log(error);
    }
  };

  if (loggedIn) {
    if (role === 'admin') {
      return <AdminPanel />;
    } else if (role === 'user') {
      return <UserPanel />;
    }
  }
  return (
    <div className="container pt-4 mt-5 my-3">
      <label className="col-sm-10 col-form-label" style={{ color: 'orangered' }}>
        <h3>Welcome! Please Log In To Continue</h3>
      </label>

      <hr />
      <div className="form-group row">
        <label htmlFor="userId" className="col-sm-2 col-form-label">
          User ID:
        </label>
        <div className="col-sm-5">
          <input
            type="text"
            className="form-control"
            id="userId"
            placeholder="User ID"
            value={userId}
            onChange={(e) => setUserId(e.target.value)}
          />
        </div>
      </div>
      <br />

      <div className="form-group row">
        <label htmlFor="password" className="col-sm-2 col-form-label">
          Password:
        </label>
        <div className="col-sm-5">
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>

      {error && <p>{error}</p>}

      <div className="form-group row">
        <div className="col-lg-4 col-md-6 col-sm-8 col-10 mt-3" align="center">
          <button
            type="submit"
            className="btn text-light btn-large btn-block btn-center"
            style={{ backgroundColor: 'orangered'}}
            onClick={handleLogin}
          >
            Log In
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Login;
