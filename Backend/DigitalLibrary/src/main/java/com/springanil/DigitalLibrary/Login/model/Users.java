package com.springanil.DigitalLibrary.Login.model;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Data
@Table(name = "users")
@AllArgsConstructor
@NoArgsConstructor
public class Users {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    @Column(unique = true)
    private String email;

    private String password;

    public String getEmail() {
         return this.email;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

}
