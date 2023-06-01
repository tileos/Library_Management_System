import axios from 'axios'

const BORROWED_LIST="http://localhost:9010/api/book/borrowedBooks?userID=${userId}"
class GetBorrowed
{
    getBorrowedList()
    {
        return  axios.get(BORROWED_LIST)
               
    }
}
var BorrowedService=new GetBorrowed()
export default BorrowedService

