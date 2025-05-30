package com.springanil.DigitalLibrary.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Data
@Table(name = "users")
public class Users {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    @Column(name ="USERNAME", nullable = false, unique = true, length = 45)
    private String email;
//    public String getEmail() {
//        return email;
//    }

    @Column(name= "PASSWORD", nullable = false, length = 45)
    private String password;
//    public String getPassword() {
//        return password;
//    }
}
