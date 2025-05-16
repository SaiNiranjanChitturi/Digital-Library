package com.springanil.DigitalLibrary.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Table(name = "Users")
public class User {

    @Id
    @Column(name="ID")
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;

    @Column(name ="USERNAME", nullable = false, unique = true, length = 45)
    private String email;

    @Column(name= "PASSWORD", nullable = false, length = 45)
    private String password;

}
