package com.springanil.DigitalLibrary.Home.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.springanil.DigitalLibrary.Home.model.Product;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class ProductRepo extends JpaRepository<Product, Integer> {

    List<Product> findAll();

}
