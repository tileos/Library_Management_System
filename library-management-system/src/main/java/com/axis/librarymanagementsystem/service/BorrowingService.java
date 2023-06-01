package com.axis.librarymanagementsystem.service;

import java.util.List;

import com.axis.librarymanagementsystem.exception.BookNotFoundException;
import com.axis.librarymanagementsystem.exception.UserNotFoundException;
import com.axis.librarymanagementsystem.model.Borrowing;
import com.axis.librarymanagementsystem.request.BorrowBookRequest;
import com.axis.librarymanagementsystem.request.ReturnBookRequest;
import com.axis.librarymanagementsystem.response.BookBorrowResponse;

public interface BorrowingService {

    BookBorrowResponse borrowBook(BorrowBookRequest borrowBookRequest) throws BookNotFoundException, UserNotFoundException;

    void returnBook(ReturnBookRequest returnBookRequest);
    
	public List<Borrowing> getAllBorrowedBooks(int user_id);

}
