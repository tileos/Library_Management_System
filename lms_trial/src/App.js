import './App.css';
import { ToastContainer} from 'react-toastify';
import { Card } from 'reactstrap';
// import StartPage from './Startpage';
import Login from './Component/Log In/LogIn';
import NewUserForm from './Component/UserComponent/Add_User';

function App() {
    
  return (
    <div>
        <div>
            <Card className="my-3 bg-dark">
              <h1 className="text-center my-3 font-weight-bold text-dark-purple" >Welcome to the Library Management System</h1>
            </Card>
          </div>

      <ToastContainer />
    
        <div>
    <Login/>
      {/* <StartPage/> */}
        </div>
      <div>
          {/* <ListBorrowedBooks/>    */}
      </div>
      <br /><hr />

   
    <footer className="blockquote-footer text-center ">Library Management System</footer>

    </div>
  );
}

export default App;
