package com.axis.librarymanagementsystem.repository;

import com.axis.librarymanagementsystem.model.Borrowing;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface BorrowingRepository extends JpaRepository<Borrowing,Integer> {
	
	@Query(value ="SELECT * FROM borrowing b WHERE b.user_id=:userId AND b.book_id=:bookId AND b.book_status=0",nativeQuery = true)
	Borrowing findBybookIdAnduserId(@Param("userId") int userId, @Param("bookId") int bookId);
	
	@Query(value ="SELECT * FROM borrowing b WHERE b.user_id=:userId",nativeQuery = true)
	List<Borrowing> findBybookByUserId(@Param("userId") int userId);

}
