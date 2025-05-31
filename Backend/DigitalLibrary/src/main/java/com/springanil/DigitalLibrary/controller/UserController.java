package com.springanil.DigitalLibrary.controller;

import com.springanil.DigitalLibrary.model.Users;
import com.springanil.DigitalLibrary.repository.UsersRepository;
import com.springanil.DigitalLibrary.service.JwtService;
import com.springanil.DigitalLibrary.service.Userservice;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Optional;


@Controller
@RequestMapping("/")
public class UserController {

    @Autowired
    private UsersRepository userRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Users user) {
        if (userRepository.findByEmail(user.getEmail()).isPresent()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/api/login")
    public ResponseEntity<?> login(@RequestBody Users user) {
        Optional<Users> optionalUser = userRepository.findByEmail(user.getEmail());
        if (optionalUser.isPresent()) {
            Users existingUser = optionalUser.get();
            if (passwordEncoder.matches(user.getPassword(), existingUser.getPassword())) {
                String token = jwtService.generateToken(existingUser.getEmail());
                return ResponseEntity.ok(Collections.singletonMap("token", token));
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
    }

    @RestController
    public static class TestController {

        @GetMapping("/hello")
        public String hello() {
            return "Backend is up!";
        }
    }


}

