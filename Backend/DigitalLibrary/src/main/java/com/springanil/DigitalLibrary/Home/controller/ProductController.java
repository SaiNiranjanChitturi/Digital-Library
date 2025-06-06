package com.springanil.DigitalLibrary.Home.controller;


import com.springanil.DigitalLibrary.Home.model.Product;
import com.springanil.DigitalLibrary.Home.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping("/products")
    public List<Product> getAllProducts() {

        return service.getAllProducts();
    }
}
