package com.axis.librarymanagementsystem.service;

import com.axis.librarymanagementsystem.exception.BookNotFoundException;
import com.axis.librarymanagementsystem.exception.UserNotFoundException;
import com.axis.librarymanagementsystem.model.Book;
import com.axis.librarymanagementsystem.model.BookStatus;
import com.axis.librarymanagementsystem.model.Borrowing;
import com.axis.librarymanagementsystem.model.User;
import com.axis.librarymanagementsystem.repository.BookRepository;
import com.axis.librarymanagementsystem.repository.BorrowingRepository;
import com.axis.librarymanagementsystem.request.BorrowBookRequest;
import com.axis.librarymanagementsystem.request.ReturnBookRequest;
import com.axis.librarymanagementsystem.response.BookBorrowResponse;

import lombok.extern.java.Log;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
@Log
public class BorrowingServiceImpl implements BorrowingService {

    @Autowired
    private BorrowingRepository borrowingRepository;

    @Autowired
    private BookServiceImpl bookServiceImpl;

    @Autowired
    private UserServiceImpl userServiceImpl;

    @Autowired
    private BookRepository bookRepository;

   

    @Override
    public BookBorrowResponse borrowBook(BorrowBookRequest borrowBookRequest) throws BookNotFoundException, UserNotFoundException {

        Book book = bookServiceImpl.getBookByID(borrowBookRequest.getBookID());
        User user = userServiceImpl.getUserById(borrowBookRequest.getUserID());
        if (book.equals(null)) {
            throw new BookNotFoundException("Book not found for BookID " + borrowBookRequest.getBookID());
        }

        if (user.equals(null)) {
            throw new UserNotFoundException("User not found for UserID" + borrowBookRequest.getUserID());
        }
        if (book.getAvailableQuantity() > 0) {
            Borrowing borrowing = new Borrowing();
            borrowing.setBook(book);
            borrowing.setUser(user);
            borrowing.setBorrowDate(LocalDate.now());
            borrowing.setDueDate(borrowBookRequest.getDueDate());
            borrowing.setBookStatus(BookStatus.BORROWED);
            borrowing.setReturnDate(null);

            borrowingRepository.save(borrowing);

            book.setAvailableQuantity(book.getAvailableQuantity()-1);
            bookRepository.save(book);

            return BookBorrowResponse.builder().book(book).user(user)
                    .borrowDate(borrowing.getBorrowDate())
                    .dueDate(borrowing.getDueDate()).bookStatus(borrowing.getBookStatus()).build();
        }
        return null;
    }


	@Override
	public void returnBook(ReturnBookRequest returnBookRequest) {
		
		Borrowing borrowedBook = borrowingRepository.findBybookIdAnduserId(returnBookRequest.getUserID(),returnBookRequest.getBookID());
		borrowedBook.setReturnDate(LocalDate.now());
		borrowedBook.setBookStatus(BookStatus.RETURNED);
		borrowingRepository.save(borrowedBook);
		
		Book book=bookServiceImpl.getBookByID(returnBookRequest.getBookID());
		book.setAvailableQuantity(book.getAvailableQuantity()+1);
		bookRepository.save(book);
		log.info("Book Returned successfully..!"+borrowedBook.toString());
	}


	@Override
	public List<Borrowing> getAllBorrowedBooks(int user_id) {
		
		List<Borrowing> borrowed_List=borrowingRepository.findBybookByUserId(user_id);
		System.out.println(">>>>>>>>>>>>>>>>>>>>"+borrowed_List);
		return borrowed_List;
	}
}
