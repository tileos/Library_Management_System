package com.axis.librarymanagementsystem.request;

import lombok.Data;

@Data
public class ReturnBookRequest {

	private int userID;
	private int bookID;
}
