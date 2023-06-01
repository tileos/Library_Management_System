import axios from 'axios'

const LIBRARY_BOOK_API="http://localhost:9010/api/book/getAllBooks"
class Get_Books
{
    getUserList()
    {
        return  axios.get(LIBRARY_BOOK_API)
               
    }
}
var bookService=new Get_Books()
export default bookService

