import React from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';

const Homepage = () => {
  // const handleLogout = () => {
  //   // Perform logout logic here
  //   // Redirect to login page
  //   window.location.href = '/login';
  // };

  return (
    <div className="container-fluid">
      {/* <button
        className="btn btn-link float-right mt-3"
        onClick={handleLogout}
      >
        Logout
      </button> */}



      <h3 className="text-center mt-5" >Manage your library with ease.</h3>

      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <Card className="shadow">
            <CardBody>
              <CardTitle className="text-center mb-4">Explore our Collection</CardTitle>
              <CardText className="text-center">
                Browse through our vast collection of books and find your next read.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-md-6">
          <Card className="shadow">
            <CardBody>
              <CardTitle className="text-center mb-4">Borrow a Book</CardTitle>
              <CardText className="text-center">
                Borrow a book from our library and enjoy the pleasure of reading.
              </CardText>
            </CardBody>
          </Card>
        </div>
      </div>

      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <blockquote className="blockquote text-center">
            <p className="mb-0">
              "A book is a dream that you hold in your hand."<br />
              Neil Gaiman
            </p><br />
          </blockquote>
        </div>
              {/* <button  className="btn btn-danger" onClick={handleLogout}>LogOut</button> */}

      </div>
    </div>
  );
};

export default Homepage;
