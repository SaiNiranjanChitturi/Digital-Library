package com.springanil.DigitalLibrary.controller;


import com.springanil.DigitalLibrary.model.User;
import com.springanil.DigitalLibrary.service.Userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private Userservice service;

    @Autowired
    public UserController(Userservice service) {
        this.service = service;
    }


    @GetMapping("/")
    public String greet(){
        return "Hello Dheeraj, Welcome to Digital Library";
    }

    @GetMapping("/users")
    public List<User> getAllUsers(){
        return null;
    }
}
