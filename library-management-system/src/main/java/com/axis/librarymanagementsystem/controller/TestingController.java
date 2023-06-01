package com.axis.librarymanagementsystem.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TestingController {

    @GetMapping("/my")
    public String dummyController()
    {
        return "Hello I am running..!";
    }
}
