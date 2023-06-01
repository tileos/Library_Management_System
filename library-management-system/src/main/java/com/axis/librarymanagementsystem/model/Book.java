package com.axis.librarymanagementsystem.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.Set;

@Entity
@Table(name = "book")
@Data
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
//    @JsonIgnore
    public int bookID;
    @Column(name = "title")
    public String title;
    @Column(name = "author")
    public String author;
    @Column(name = "subject")
    public String subject;
    @Column(name = "isbn")
    public String isbn;
    @Column(name = "publisher")
    public String publisher;
    @Column(name = "publication_date")
    public LocalDate publicationDate;
    @Column(name = "totalQuantity")
    public int totalQuantity;
    @Column(name = "available_quantity")
    public int availableQuantity;

    @OneToMany(mappedBy = "book",cascade = CascadeType.ALL)
    @JsonIgnore
    public Set<Borrowing> borrowingSet;
}
