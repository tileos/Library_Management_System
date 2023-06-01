package com.axis.librarymanagementsystem.controller;

import com.axis.librarymanagementsystem.model.User;
import com.axis.librarymanagementsystem.service.UserServiceImpl;
import lombok.extern.java.Log;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@Log
@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserServiceImpl userService;

    @PostMapping("/register")
    public ResponseEntity<User> registerUser(@RequestBody User user) {
        try {
            user = userService.registerUser(user);
            return ResponseEntity.ok(user);
        } catch (Exception exception) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/getAllUsers")
    public ResponseEntity<List<User>> getAllUsers() {

        try {
            List<User> users = userService.getAllUsers();
            return ResponseEntity.ok(users);
        } catch (Exception exception) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/getUserByIdNumber")
    public ResponseEntity<User> getUserByIdNumber(@RequestParam(value = "userID") int userID) {
        try {
            User user = userService.getUserById(userID);
            return ResponseEntity.ok(user);
        } catch (Exception exception) {
            log.severe("" + exception);
            return ResponseEntity.internalServerError().build();
        }
    }

    @PutMapping("/updateUser")
    public ResponseEntity<User> updateUser(@RequestParam(value = "userID") int userID, @RequestBody User user) {
        try {
            Boolean updateStatus = userService.updateUser(user, userID);
            if (updateStatus == true) {
                return ResponseEntity.ok(user);
            } else {
                return ResponseEntity.notFound().build();
            }
        } catch (Exception exception) {
            log.severe("" + exception);
            return ResponseEntity.internalServerError().build();
        }
    }

    @DeleteMapping("/deleteUser")
    public ResponseEntity deleteUserByUserId(@RequestParam(value = "userID") int userID) {
        try {
            userService.deleteUserByUserID(userID);
            return ResponseEntity.ok().build();
        } catch (EmptyResultDataAccessException emptyResultDataAccessException) {
            log.severe("User not found for Id : " + userID);
            return ResponseEntity.notFound().build();
        } catch (Exception exception) {
            log.severe("" + exception);
            return ResponseEntity.internalServerError().build();
        }
    }
}
