package com.springanil.DigitalLibrary.Home.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.springanil.DigitalLibrary.Home.model.Book;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface BookRepo extends JpaRepository<Book, Integer> {


}
