package com.springanil.DigitalLibrary.controller;

import com.springanil.DigitalLibrary.model.Users;
import com.springanil.DigitalLibrary.service.JwtService;
import com.springanil.DigitalLibrary.service.Userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.Collections;


@Controller
@RequestMapping("/")
public class UserController {

    @Autowired
    private Userservice service;

    @Autowired
    JwtService jwtService;

    @PostMapping("/api/login")
    public ResponseEntity<?> login(@RequestBody Users user) {
        Users dbUser = service.findByEmailAndPassword(user.getEmail());
        if (dbUser != null && dbUser.getPassword().equals(user.getPassword())) {
            String token = jwtService.generateToken(user.getEmail());
            return ResponseEntity.ok(Collections.singletonMap("token", token));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }
}
