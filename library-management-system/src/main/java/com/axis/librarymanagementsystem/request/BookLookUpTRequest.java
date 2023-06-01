package com.axis.librarymanagementsystem.request;

import lombok.Builder;
import lombok.Data;

import java.io.Serializable;

@Data
@Builder
public class BookLookUpTRequest implements Serializable {
    public String title;
    public String author;
    public String subject;
}
