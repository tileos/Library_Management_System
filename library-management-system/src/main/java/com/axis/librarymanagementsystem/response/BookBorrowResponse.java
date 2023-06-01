package com.axis.librarymanagementsystem.response;

import com.axis.librarymanagementsystem.model.Book;
import com.axis.librarymanagementsystem.model.BookStatus;
import com.axis.librarymanagementsystem.model.User;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDate;

@Builder
@Data
public class BookBorrowResponse {
    private Book book;
    private User user;
    private LocalDate borrowDate;
    private LocalDate dueDate;
    private BookStatus bookStatus;
}
