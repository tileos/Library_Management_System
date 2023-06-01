package com.axis.librarymanagementsystem.service;

import com.axis.librarymanagementsystem.model.Book;
import com.axis.librarymanagementsystem.model.User;
import com.axis.librarymanagementsystem.repository.BookRepository;
import com.axis.librarymanagementsystem.request.AddBookRequest;
import com.axis.librarymanagementsystem.request.BookLookUpTRequest;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Log
@Service
public class BookServiceImpl implements BookService {

    @Autowired
    private BookRepository bookRepository;

    @Override
    public Book addNewBook(AddBookRequest addBookRequest) {
        Book book=new Book();
        book.setTitle(addBookRequest.getTitle());
        book.setAuthor(addBookRequest.getAuthor());
        book.setSubject(addBookRequest.getSubject());
        book.setIsbn(addBookRequest.getIsbn());
        book.setPublisher(addBookRequest.getPublisher());
        book.setPublicationDate(addBookRequest.getPublicationDate());
        book.setAvailableQuantity(addBookRequest.getTotalQuantity());
        book.setTotalQuantity(addBookRequest.getTotalQuantity());
        bookRepository.save(book);
        return book;
    }

    @Override
    public boolean updateBook(Book newBook, int bookID) {
        try {
            Book existingBook = bookRepository.findById(bookID).get();
            if (existingBook != null)
            {
                existingBook.setTitle(newBook.getTitle());
                existingBook.setAuthor(newBook.getAuthor());
                existingBook.setSubject(newBook.getSubject());
                existingBook.setIsbn(newBook.getIsbn());
                existingBook.setPublisher(newBook.getPublisher());
                existingBook.setPublicationDate(newBook.getPublicationDate());
                existingBook.setAvailableQuantity(newBook.getAvailableQuantity());
                existingBook.setTotalQuantity(newBook.getTotalQuantity());
                
                bookRepository.save(existingBook);
                return true;
            }
        } catch (NoSuchElementException exception) 
        {
            log.info("Book not found for BookID : " + bookID);
            return false;
        }
        return false;
    }

    @Override
  	public List<Book> getAllBooks()
  	{
      	return bookRepository.findAll();
  	}
    
    @Override
    public Book getBookByID(int bookID) {
        return bookRepository.findById(bookID).get();
    }

    @Override
    public void deleteBook(int bookID) {
        bookRepository.deleteById(bookID);
        log.info("User deleted having ID : " + bookID);
    }
    
    public List<Book> searchBook(BookLookUpTRequest bookLookUpTRequest) {
        if (bookLookUpTRequest != null) {
            if (bookLookUpTRequest.getAuthor() != null && !bookLookUpTRequest.getAuthor().isEmpty())
            {
                return bookRepository.findBooksByAuthor(bookLookUpTRequest.getAuthor());
            }
            else if (bookLookUpTRequest.getSubject() != null && !bookLookUpTRequest.getSubject().isEmpty()) 
            {
                return bookRepository.findBooksBySubject(bookLookUpTRequest.getSubject());
            }
            else if (bookLookUpTRequest.getTitle() != null && !bookLookUpTRequest.getTitle().isEmpty()) 
            {
                return bookRepository.findBooksByTitle(bookLookUpTRequest.getTitle());
            }
        }
        return null;
    }


//    @Override
//    public List<Book> searchBook(BookLookUpTRequest bookLookUpTRequest){
//        if (!bookLookUpTRequest.equals(null))
//        {
//            if (!bookLookUpTRequest.getAuthor().isEmpty())
//            {
//                return bookRepository.findBooksByAuthor(bookLookUpTRequest.author);
//            } 
//            else if (!bookLookUpTRequest.getSubject().equals(null))
//            {
//                return bookRepository.findBooksBySubject(bookLookUpTRequest.subject);
//            }
//            else if (!bookLookUpTRequest.getTitle().equals(null))
//            {
//                return bookRepository.findBooksByTitle(bookLookUpTRequest.title);
//            }
//        }
//        return null;
//    }
}
