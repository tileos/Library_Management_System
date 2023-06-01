import axios from 'axios'

const LIBRARY_BASE_API="http://localhost:9010/api/user/getAllUsers"
class User_Service
{
    getUserList()
    {
        return  axios.get(LIBRARY_BASE_API)
               
    }
}
var userService=new User_Service()
export default userService

// ttp://localhost:9010/api/user/getUserByIdNumber?=