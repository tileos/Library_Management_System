import React, { Component } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';


class NewUserForm extends Component {
  constructor(props) {
    super(props);
    this.fnameInput = React.createRef();
    this.lnameInput = React.createRef();
    this.mailInput = React.createRef();
    this.passInput = React.createRef();
    this.roleInput = React.createRef();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const fname = this.fnameInput.current.value;
    const lname = this.lnameInput.current.value;
    const mail = this.mailInput.current.value;
    const pass = this.passInput.current.value;
    const role = this.roleInput.current.value;

    const userData = {
      firstName: fname,
      lastName: lname,
      email: mail,
      password: pass,
      role: role,
    };

    axios
      .post('http://localhost:9010/api/user/register', userData)
      .then(function (response) {
        console.log('Response:', response);

        toast.success('New User added successfully', {
          icon: '🗸', // Success tick mark
          theme: 'dark', // Dark theme
            position: 'bottom-right' // Position at the bottom right
          });  
      })
      .catch(function (error) {
        console.error('Error:', error);
        // Handle error if needed
      });
  };

  render() {
    return (
      <div className="container pt-4 mt-5 my-3">
        <h1 className="text-center"  style={{ backgroundColor: '#555556' }}>
          <font size="8px">
            <b>User Registration Form</b>
          </font>
        </h1>
        <hr />
        <br />
        <form id="libraryForm" onSubmit={this.handleFormSubmit}>
          <div className="form-group row">
            <label htmlFor="bookName" className="col-sm-2 col-form-label">
              First Name:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="fnameinpunt"
                placeholder="First Name"
                ref={this.fnameInput}
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label htmlFor="Author" className="col-sm-2 col-form-label">
              Last Name:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="lnameinpunt"
                placeholder="Last Name"
                ref={this.lnameInput}
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label htmlFor="Author" className="col-sm-2 col-form-label">
              Email:
            </label>
            <div className="col-sm-10">
              <input
                type="Email"
                className="form-control"
                id="mailinpunt"
                placeholder="Primary Email"
                ref={this.mailInput}
              />
            </div>
          </div>
          <br />

          <div className="form-group row">
            <label htmlFor="IsbnNo" className="col-sm-2 col-form-label">
              Role:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="roleinput"
                placeholder="User Role"
                ref={this.roleInput}
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label htmlFor="IsbnNo" className="col-sm-2 col-form-label">
              Password:
            </label>
            <div className="col-sm-10">
              <input
                type="Password"
                className="form-control"
                id="passinpunt"
                placeholder="New Password"
                ref={this.passInput}
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <div className="col-lg-5 col-sm-5 mt-3" align="center">
              <button
                type="submit"
                className="btn text-light btn-large btn-block btn-center"
                style={{ backgroundColor: 'orangered' }}
              >
                Register New User
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default NewUserForm;
