package com.springanil.DigitalLibrary.repository;

import com.springanil.DigitalLibrary.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.io.Serializable;


@Repository
public interface UserRepository extends JpaRepository<User, Serializable> {

    User findByUsernameAndPassword(String username, String password);

}
