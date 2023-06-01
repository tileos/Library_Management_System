import { Component } from "react";
import bookService from "../../Service/Book_Service";


class ListBooksComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {
            books:[],
        };
    }

    componentDidMount()
    {
        bookService.getUserList().then(res=>{
            this.setState({books:res.data   })
        })
    }

    render(){

        return(

           
        <div>
            <div>
                <div>
                    <div className="container" >
                        <table className='table table-striped table-bordered table-hover table-center'>
                            <thead>
                            <tr style={{background:"lightgreen"}}>
                                <th>Book ID</th>
                                <th>Book Name</th>
                                <th>Author Name</th>
                                <th>ISBN no.</th>
                                <th>Subject</th>                                
                                <th>Publications</th>
                                {/* <th>Publication Date</th> */}
                                <th>Available Quantity</th>
                                <th>Total Quantity</th>                                

                            </tr>
                         </thead>
                            <tbody>
                                {
                                    this.state.books.map(
                                         book=>(
                                            <tr key={book.bookID}>
                                                <th>{book.bookID}</th>
                                                <th>{book.title}</th>
                                                <th>{book.author}</th>
                                                <th>{book.isbn}</th>
                                                <th>{book.subject}</th>
                                                <th>{book.publisher}</th>
                                                {/* <th>{book.publication_date}</th> */}
                                                <th>{book.availableQuantity}</th>
                                                <th>{book.totalQuantity}</th>

                                            </tr>)


                                    )
                                }
                            </tbody>

                        </table>
                        </div>
                </div>
            </div>
      </div>
                        
             

        )

    }

}

export default ListBooksComponent;