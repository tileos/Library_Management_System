package com.axis.librarymanagementsystem.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.*;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.io.Serializable;
import java.time.LocalDate;

@Entity
@Table(name = "borrowing")
@Data

public class Borrowing implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int borrowingID;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "book_id")
    @EqualsAndHashCode.Exclude @ToString.Exclude
    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    private Book book;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(name = "user_id")
    @EqualsAndHashCode.Exclude @ToString.Exclude
    @JsonIgnoreProperties(value = {"applications", "hibernateLazyInitializer"})
    private User user;

    @Column(name = "borrow_date")
    private LocalDate borrowDate;

    @Column(name = "due_date")
    private LocalDate dueDate;

    @Column(name = "return_date")
    private LocalDate returnDate;

    @Column(name = "book_Status")
    private BookStatus bookStatus;

    @Enumerated(EnumType.STRING)
    @Column(name = "book_status")
    public BookStatus getAccountStatus() {
        return bookStatus;
    }

    public void setBoookStatus(BookStatus bookStatus) {
        this.bookStatus = bookStatus;
    }
}
