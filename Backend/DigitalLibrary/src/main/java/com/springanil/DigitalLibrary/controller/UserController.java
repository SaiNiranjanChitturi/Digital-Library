package com.springanil.DigitalLibrary.controller;

import com.springanil.DigitalLibrary.model.Users;
import com.springanil.DigitalLibrary.service.Userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;


@Controller
@RequestMapping("/")
public class UserController {

    @Autowired
    private Userservice service;

//    @PostMapping("/register")
//    public Users register(@RequestBody Users user) {
//        return service.register(user);
//    }

    @PostMapping("/login")
    public String login(@RequestBody Users user) {
        return "success";
    }



}
