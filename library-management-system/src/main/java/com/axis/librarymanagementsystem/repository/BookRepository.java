package com.axis.librarymanagementsystem.repository;

import com.axis.librarymanagementsystem.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookRepository extends JpaRepository<Book, Integer> {

    List<Book> findBooksByAuthor(String author);
    List<Book> findBooksBySubject(String subject);
    List<Book> findBooksByTitle(String title);
}
