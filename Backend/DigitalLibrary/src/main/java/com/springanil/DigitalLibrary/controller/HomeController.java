package com.springanil.DigitalLibrary.controller;


import com.springanil.DigitalLibrary.model.Book;
import com.springanil.DigitalLibrary.service.BookService;
import com.springanil.DigitalLibrary.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/books")
public class HomeController {

    @Autowired
    private BookService service;

    private CategoryService categoryService;

    @GetMapping
    public List<Book> getAllBooks() {
        return service.getAllBooks();
    }

    @PostMapping
    public Book addBook(@RequestBody  Book book) {
        System.out.println("Received Book: " + book);
        return service.saveBook(book);
    }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable int id) {
        return service.getBookById(id);
    }

    @GetMapping("/categories")
    public String getAllActiveCategories() {
        return categoryService.getAllActiveCategories().toString();
    }

}
