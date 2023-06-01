package com.axis.librarymanagementsystem.service;

import com.axis.librarymanagementsystem.model.User;
import com.axis.librarymanagementsystem.repository.UserRepository;
import lombok.extern.java.Log;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@Log
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public User registerUser(User user) {
        user.setAccountStatus(user.getAccountStatus());
        userRepository.save(user);
        log.info("User registered Successfully" + user);
        return user;
    }

    @Override
    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    @Override
    public User getUserById(int userID) {
        return userRepository.findById(userID).get();
    }

    @Override
    public boolean updateUser(User user, int userID) {
        try {
            User existingUser = userRepository.findById(userID).get();
            if (existingUser != null) {
                existingUser.setFirstName(user.getFirstName());
                existingUser.setLastName(user.getLastName());
                existingUser.setEmail(user.getEmail());
                existingUser.setPassword(user.getPassword());
                existingUser.setAccountStatus(user.getAccountStatus());
                userRepository.save(existingUser);
                return true;
            }
        } catch (NoSuchElementException exception) {
            log.info("User not found for userID :" + userID);
            return false;
        }

        return false;
    }

    @Override
    public void deleteUserByUserID(int userID) {
        userRepository.deleteById(userID);
        log.info("User deleted having ID : " + userID);
    }
}
