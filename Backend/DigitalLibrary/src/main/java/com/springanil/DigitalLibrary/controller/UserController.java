package com.springanil.DigitalLibrary.controller;


import com.springanil.DigitalLibrary.model.User;
import com.springanil.DigitalLibrary.service.Userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
//@RequestMapping("/api")
public class UserController {

//    @Autowired
//    private Userservice service;
//
//    @Autowired
//    public UserController(Userservice service) {
//        this.service = service;
//    }
//
//    @GetMapping("/")
//    public String greet(){
//        return "Hello Dheeraj, Welcome to Digital Library";
//    }
//
//    @GetMapping("/users")
//    public List<User> getAllUsers(){
//        return null;
//    }

//    @GetMapping("/success")
//    public ResponseEntity<String> successResponse(){
//        String responseBody = "Request was successful !";
//        return new ResponseEntity<>(responseBody, HttpStatus.OK);
//    }

    @GetMapping("/")
    public String greet(){
        return "Welcome anil, you did it!";
    }

}
