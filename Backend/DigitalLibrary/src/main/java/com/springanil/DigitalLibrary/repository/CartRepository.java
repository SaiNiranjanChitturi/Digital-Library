package com.springanil.DigitalLibrary.repository;

import com.springanil.DigitalLibrary.model.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CartRepository extends JpaRepository<Cart, Integer> {

}

