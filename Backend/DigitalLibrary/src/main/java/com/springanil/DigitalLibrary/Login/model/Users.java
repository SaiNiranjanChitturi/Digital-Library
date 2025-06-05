package com.springanil.DigitalLibrary.Login.model;

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

    @Column(unique = true)
    private String email;
    public String getEmail() {
         return this.email;
    }


    private String password;
    public String getPassword() {
        return this.password;
    }
    // In `Users.java`
    public void setPassword(String password) {
        this.password = password;
    }

}
