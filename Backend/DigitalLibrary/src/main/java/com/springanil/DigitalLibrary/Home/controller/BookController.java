package com.springanil.DigitalLibrary.Home.controller;


import com.springanil.DigitalLibrary.Home.model.Book;
import com.springanil.DigitalLibrary.Home.service.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class BookController {

    @Autowired
    private BookService service;

    @GetMapping
    public List<Book> getAllBooks() {
        return service.getAllBooks();
    }

    @PostMapping
    public Book addBook(@RequestBody  Book book) {
        return service.saveBook(book);
    }
}
