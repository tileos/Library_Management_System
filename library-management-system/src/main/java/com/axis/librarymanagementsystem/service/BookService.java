package com.axis.librarymanagementsystem.service;

import com.axis.librarymanagementsystem.model.Book;
import com.axis.librarymanagementsystem.request.AddBookRequest;
import com.axis.librarymanagementsystem.request.BookLookUpTRequest;

import java.util.List;

public interface BookService {

    Book addNewBook(AddBookRequest book);

    boolean updateBook(Book book,int bookID);

    Book getBookByID(int bookID);

    void deleteBook(int bookID);
    List<Book> getAllBooks();

    List<Book> searchBook(BookLookUpTRequest bookLookUpTRequest);

}
