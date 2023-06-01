package com.axis.librarymanagementsystem.request;

import lombok.Data;

import java.time.LocalDate;

@Data
public class BorrowBookRequest {
    private int bookID;
    private int userID;
    private LocalDate dueDate;
}
