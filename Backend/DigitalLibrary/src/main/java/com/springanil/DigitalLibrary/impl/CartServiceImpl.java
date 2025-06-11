//package com.springanil.DigitalLibrary.impl;
//
//
//import com.springanil.DigitalLibrary.model.Book;
//import com.springanil.DigitalLibrary.model.Cart;
//import com.springanil.DigitalLibrary.model.Users;
//import com.springanil.DigitalLibrary.repository.BookRepository;
//import com.springanil.DigitalLibrary.repository.CartRepository;
//import com.springanil.DigitalLibrary.repository.UserRepository;
//import com.springanil.DigitalLibrary.service.CartService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.security.core.userdetails.User;
//import org.springframework.stereotype.Service;
//import org.springframework.util.ObjectUtils;
//
//import java.util.List;
//
//@Service
//public class CartServiceImpl implements CartService {
//
//    @Autowired
//    private CartRepository cartRepository;
//
//    @Autowired
//    private UserRepository userRepository;
//
//    @Autowired
//    private BookRepository bookRepository;
//
//    @Override
//    public Cart saveCart(Integer bookId, Integer userId) {
//
//        Users user =  userRepository.findById(userId).get();
//        Book book = bookRepository.findById(bookId).get();
//        Cart cartStatus = cartRepository.findByUserIdAndBookId(bookId, userId);
//
//        Cart cart = null;
//        if(ObjectUtils.isEmpty(user)) {
//            cart = new Cart();
//            cart.setUser(user);
//            cart.setBook(book);
//            cart.setQuantity(1);
//            cart.setTotalPrice(1* book.getPrice());
//        }else {
//            cart = cartStatus;
//            cart.setQuantity(cart.getQuantity() + 1);
//            cart.setTotalPrice(cart.getQuantity() * cart.getBook().getPrice());
//        }
//        Cart saveCart = cartRepository.save(cart);
//        return saveCart;
//    }
//
//    @Override
//    public List<Cart> getCartByUserId(Integer userId) {
//        // TODO: Implement logic to get cart items by user ID
//        return null;
//    }
//}
