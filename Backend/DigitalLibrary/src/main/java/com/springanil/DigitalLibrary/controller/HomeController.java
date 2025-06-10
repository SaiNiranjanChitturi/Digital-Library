package com.springanil.DigitalLibrary.controller;


import com.springanil.DigitalLibrary.model.Book;
import com.springanil.DigitalLibrary.service.BookService;
//import com.springanil.DigitalLibrary.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Collection")
public class HomeController {

    @Autowired
    private BookService bookService;

    @Autowired
//    private CategoryService categoryService;

    @GetMapping
    public List<Book> getAllBooks() {
        return bookService.getAllBooks();
    }

    @PostMapping
    public ResponseEntity<String> addBook(@RequestBody  List<Book> book) {
        bookService.saveAll(book);
        return ResponseEntity.ok("Books added successfully!");
    }

    @GetMapping("/{id}")
    public Book getBookById(@PathVariable int id) {
        return bookService.getBookById(id);
    }

//    @GetMapping("/categories")
//    public String getAllActiveCategories() {
//        return categoryService.getAllActiveCategories().toString();
//    }

}
