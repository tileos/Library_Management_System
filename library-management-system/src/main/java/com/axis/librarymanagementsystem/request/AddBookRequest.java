package com.axis.librarymanagementsystem.request;

import lombok.Data;

import javax.persistence.Column;
import java.io.Serializable;
import java.time.LocalDate;

@Data
public class AddBookRequest implements Serializable {
    public String title;
    public String author;
    public String subject;
    public String isbn;
    public String publisher;
    public LocalDate publicationDate;
    public int totalQuantity;

}
