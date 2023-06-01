package com.axis.librarymanagementsystem.controller;

import com.axis.librarymanagementsystem.exception.BookNotFoundException;
import com.axis.librarymanagementsystem.exception.UserNotFoundException;
import com.axis.librarymanagementsystem.model.Book;
import com.axis.librarymanagementsystem.model.Borrowing;
import com.axis.librarymanagementsystem.request.AddBookRequest;
import com.axis.librarymanagementsystem.request.BookLookUpTRequest;
import com.axis.librarymanagementsystem.request.BorrowBookRequest;
import com.axis.librarymanagementsystem.request.ReturnBookRequest;
import com.axis.librarymanagementsystem.response.BookBorrowResponse;
import com.axis.librarymanagementsystem.service.BookService;
import com.axis.librarymanagementsystem.service.BorrowingService;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Log
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/book")
public class BookController {

    @Autowired
    private BookService bookService;

    @Autowired
    private BorrowingService borrowingService;

    @PostMapping("/add-book")
    public ResponseEntity<Book> addNewBook(@RequestBody AddBookRequest addBookRequest)
    {
        try {
          Book book = bookService.addNewBook(addBookRequest);
            return ResponseEntity.ok(book);
        } catch (Exception exception) {
            return ResponseEntity.internalServerError().build();
        }
    }
//    @PostMapping("/addbook")
//    public String addBook(@ModelAttribute Book book,Model model)
//    {
//    	//Book book =new Book();
//		model.addAttribute("newbook",book);
//
//    	return "add_book";
//    }
  
    @PutMapping("/updateBook")
    public ResponseEntity<Book> updateBook(@RequestParam(value = "bookID") int bookID, @RequestBody Book book) {
        try {
            Boolean updateStatus = bookService.updateBook(book, bookID);
            if (updateStatus == true) {
                return ResponseEntity.ok(book);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception exception) {
            log.severe("" + exception);
            return ResponseEntity.internalServerError().build();
        }
    }
    @GetMapping("/getAllBooks")
    public ResponseEntity<List<Book>> getBooks() {

        try {
            List<Book> book = bookService.getAllBooks();
            return ResponseEntity.ok(book);
        } catch (Exception exception) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/find/getBookByID")
    public ResponseEntity<Book> getBookByID(@RequestParam(value = "bookID") int bookID) {
        try {
            Book book = bookService.getBookByID(bookID);
            ReturnBookRequest returnBookRequest=new ReturnBookRequest();
            returnBookRequest.setBookID(3);
    		returnBookRequest.setUserID(2);
            borrowingService.returnBook(returnBookRequest);
            return ResponseEntity.ok(book);
        } catch (Exception exception) {
            log.severe("" + exception);
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/find/findBook")
    public ResponseEntity<List<Book>> getBookByCriteria(@RequestParam(value = "title", required = false) String title,
            @RequestParam(value = "author", required = false) String author,
            @RequestParam(value = "subject", required = false) String subject) {
		try {
		List<Book> books = bookService.searchBook(BookLookUpTRequest.builder().title(title).author(author).subject(subject).build());
		return ResponseEntity.ok(books);
		}
		catch (Exception exception) 
		{
		log.severe("" + exception);
		return ResponseEntity.internalServerError().build();
		}
}

//    public ResponseEntity<List<Book>> getBookByCriteria(@RequestParam(value = "title",required = false) String title,
//                                                        @RequestParam(value = "author",required = false) String author,
//                                                        @RequestParam(value = "subject",required = false) String subject)
//    {
//        try{
//            List<Book> books=bookService.searchBook(BookLookUpTRequest.builder().subject(subject).title(title).author(author).build());
//            return ResponseEntity.ok(books);
//        }catch (Exception exception)
//        {
//            log.severe("" + exception);
//            return ResponseEntity.internalServerError().build();
//        }
//    }

    @DeleteMapping("/deleteBook")
    public ResponseEntity deleteBookByBookId(@RequestParam(value = "bookID") int bookID) {
        try {
            bookService.deleteBook(bookID);
            return ResponseEntity.ok().build();
        } catch (EmptyResultDataAccessException emptyResultDataAccessException) {
            log.severe("Book not found for Id : " + bookID);
            return ResponseEntity.notFound().build();
        } catch (Exception exception) {
            log.severe("" + exception);
            return ResponseEntity.internalServerError().build();
        }
    }

    @PostMapping("/borrowBook")
    public ResponseEntity<BookBorrowResponse> borrowBook(@RequestBody BorrowBookRequest borrowBookRequest) {
        try {
            BookBorrowResponse bookBorrowResponse = borrowingService.borrowBook(borrowBookRequest);
            log.info("Borrow book response"+bookBorrowResponse.toString());
           return ResponseEntity.ok(bookBorrowResponse);
        } catch (BookNotFoundException bookNotFoundException) {
            log.severe("Book Not found for BookID : " + borrowBookRequest.getBookID());
            return ResponseEntity.notFound().build();
        } catch (UserNotFoundException userNotFoundException) {
            log.severe("User Not found for UserID : " + borrowBookRequest.getUserID());
            return ResponseEntity.notFound().build();
        } catch (Exception exception) {
            return ResponseEntity.internalServerError().build();
        }
    }
    
    @PutMapping("/returnBook")
    public ResponseEntity returnBook(@RequestBody ReturnBookRequest returnBookRequest)
    {
    	try {
    		borrowingService.returnBook(returnBookRequest);
    		return ResponseEntity.ok().build(); 	
    	} 
    	catch (Exception e) {
			log.severe("Exception Occured"+e.getMessage());	
			return ResponseEntity.internalServerError().build();
		}
    }
    
    @GetMapping("/borrowedBooks")
    public ResponseEntity<List<Borrowing>> getBorrowedBooks(@RequestParam(value = "userID") int userID) {

        try {
            List<Borrowing> book = borrowingService.getAllBorrowedBooks(userID);
            return ResponseEntity.ok(book);
        } catch (Exception exception) {
            return ResponseEntity.internalServerError().build();
        }
    }
    
}