package com.springanil.DigitalLibrary.service;

import com.springanil.DigitalLibrary.model.Users;
import com.springanil.DigitalLibrary.repository.UsersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.security.core.Authentication;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;


@Service
public class Userservice {

    @Autowired
    private UsersRepository repo;

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private com.springanil.DigitalLibrary.service.JwtService JwtService;


    public String verifyUser(Users user) {
        Authentication authentication =
            authManager.authenticate(
                new UsernamePasswordAuthenticationToken(user.getEmail(), user.getPassword())
            );

        if(authentication.isAuthenticated())
            return JwtService.generateToken(user.getEmail());
        return "failure";

    }
}
