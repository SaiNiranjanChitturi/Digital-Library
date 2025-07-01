package com.springanil.DigitalLibrary.service;

import com.springanil.DigitalLibrary.model.Book;
import com.springanil.DigitalLibrary.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BookService {

    @Autowired
    private BookRepository bookRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public List<Book> saveAll(List<Book> book) {
        return bookRepository.saveAll(book);
    }

    public Book getBookById(int id) {
        return bookRepository.findById(id).orElseThrow(() -> new RuntimeException("Book not found with id: " + id));
    }
    public List<Book> getBooksWithDiscount() {
        return bookRepository.findAll().stream()
                .filter(book -> book.getDiscount() > 0)
                .toList();
    }

}
