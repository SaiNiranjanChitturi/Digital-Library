package com.springanil.DigitalLibrary.service;

import java.util.List;

import com.springanil.DigitalLibrary.model.User;
import com.springanil.DigitalLibrary.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

@Service
public class Userservice {

    @Autowired
    private UserRepository repo;

    public List<User> getAllProducts(){
        return repo.findAll();
    }
}
