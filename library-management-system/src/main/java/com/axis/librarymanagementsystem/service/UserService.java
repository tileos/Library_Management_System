package com.axis.librarymanagementsystem.service;

import com.axis.librarymanagementsystem.model.User;

import java.util.List;

public interface UserService {

    User registerUser(User user);

    List<User> getAllUsers();

    User getUserById(int userID);
    boolean updateUser(User user,int userID);

    void deleteUserByUserID(int userID);

}
