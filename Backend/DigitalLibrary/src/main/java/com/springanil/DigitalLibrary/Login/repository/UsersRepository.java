package com.springanil.DigitalLibrary.Login.repository;

import com.springanil.DigitalLibrary.Login.model.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {

    Users findByEmail(String email);
}
