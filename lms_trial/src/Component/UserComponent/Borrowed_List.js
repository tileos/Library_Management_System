import { Component } from "react";
import userService from "../../Service/User_Service";

class ListBorrowed extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            Borrowed:[],
        };
    }

    componentDidMount()
    {
        userService.getUserList().then(res=>{
            this.setState({users:res.data   })
        })
    }

    render(){

        return(

               
                  <div className="container" >
                        <table className='table table-striped table-bordered table-hover table-center'>
                            <thead>
                            <tr style={{background:"lightgreen"}}>
                                <th>User ID</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                {/* <th>Password</th> */}

                            </tr>
                         </thead>
                            <tbody>
                                {
                                    this.state.users.map(
                                         user=>(
                                            <tr key={user.userID}>
                                                <th>{user.userID}</th>
                                                <th>{user.firstName}</th>
                                                <th>{user.lastName}</th>
                                                <th>{user.email}</th>
                                                {/* <th>{user.password}</th> */}
                                            </tr>)


                                    )
                                }
                            </tbody>

                        </table>
                    </div>
               
               

        )

    }

}

export default ListBorrowed;