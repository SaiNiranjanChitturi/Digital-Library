package com.springanil.DigitalLibrary.Home.service;


import com.springanil.DigitalLibrary.Home.model.Product;
import com.springanil.DigitalLibrary.Home.repository.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService {

    @Autowired
    private ProductRepo productRepo;

    public List<Product> getAllProducts() {

        return productRepo.findAll();
    }
}
