package com.springanil.DigitalLibrary.controller;

import com.springanil.DigitalLibrary.model.Users;
import com.springanil.DigitalLibrary.repository.UsersRepository;
import com.springanil.DigitalLibrary.service.JwtService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;


@Controller
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UsersRepository userRepository;

    @Autowired
    private JwtService jwtService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register")
    public ResponseEntity<String> register(@RequestBody Users user) {
        if (userRepository.findByEmail(user.getEmail())!=null) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Username already exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully");
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody Map<String, String> loginData) {
        String email = loginData.get("email");
        String password = loginData.get("password");

        Users user = userRepository.findByEmail(email);

        if (user == null || !passwordEncoder.matches(password, user.getPassword())) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Invalid email or password"));
        }

        // mock token for dev:
        String token = UUID.randomUUID().toString();

        return ResponseEntity.ok(Map.of("message", "Login successful", "token", token));
    }

    @RestController
    public static class TestController {

        @GetMapping("/hello")
        public String hello() {
            return "Backend is up!";
        }
    }


}

