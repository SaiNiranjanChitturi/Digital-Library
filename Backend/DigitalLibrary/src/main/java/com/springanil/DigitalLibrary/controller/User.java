package com.springanil.DigitalLibrary.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
//@RequestMapping("/api")
public class User {
//    private String username;
//    private String password;

    //    ApplicationContext context = new ClassPathXmlApplicationContext();
    @RequestMapping("/")
    public String print(){
        System.out.println("hello");
    }
}
