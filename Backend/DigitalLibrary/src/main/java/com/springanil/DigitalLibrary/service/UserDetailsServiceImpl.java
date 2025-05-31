package com.springanil.DigitalLibrary.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import java.util.ArrayList;
import com.springanil.DigitalLibrary.model.Users;
import com.springanil.DigitalLibrary.repository.UsersRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UsersRepository usersRepository; // Your user repository

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        // Implement user lookup and return a UserDetails object
        // Example:
        // This approach fetches all users and filters by email
        Users user = usersRepository.findAll().stream()
            .filter(u -> u.getEmail().equals(email))
            .findFirst()
            .orElseThrow(() -> new UsernameNotFoundException("User not found"));
        return new org.springframework.security.core.userdetails.User(
            user.getEmail(), user.getPassword(), new ArrayList<>()
        );
    }
}
