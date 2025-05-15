package com.springanil.DigitalLibrary.controller;


import com.springanil.DigitalLibrary.model.User;
import com.springanil.DigitalLibrary.service.Userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController@RequestMapping("/users")
public class UserController {

    @Autowired
    private Userservice service;

    @RequestMapping("/")
    public String greet(){
        return "Hello Dheeraj, Welcome to Digital Library";
    }

    @GetMapping("/users")
    public List<User> getAllProducts(){
        return service.getAllProducts();
    }
}
