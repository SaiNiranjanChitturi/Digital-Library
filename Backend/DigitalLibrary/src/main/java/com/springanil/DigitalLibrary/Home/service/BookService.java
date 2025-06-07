package com.springanil.DigitalLibrary.Home.service;

import com.springanil.DigitalLibrary.Home.model.Book;
import com.springanil.DigitalLibrary.Home.repository.BookRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepo repo;

    public List<Book> getAllBooks() {
        return repo.findAll();
    }

    public Book saveBook(Book book) {
        return repo.save(book);
    }
}
