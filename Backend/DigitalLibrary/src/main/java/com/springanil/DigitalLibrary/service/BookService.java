package com.springanil.DigitalLibrary.service;

import com.springanil.DigitalLibrary.model.Book;
import com.springanil.DigitalLibrary.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository repo;

    public List<Book> getAllBooks() {
        return repo.findAll();
    }

    public Book saveBook(Book book) {
        return repo.save(book);
    }

    public Book getBookById(int id) {
        return repo.findById(id).orElseThrow(() -> new RuntimeException("Book not found with id: " + id));
    }
}
