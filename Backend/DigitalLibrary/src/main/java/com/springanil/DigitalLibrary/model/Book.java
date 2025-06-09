package com.springanil.DigitalLibrary.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonProperty;

@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "book")
public class Book {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private int id;

    @JsonProperty("description")
    @Column(name = "description")
    private String description;

    @JsonProperty("image_url")
    @Column(name = "image_url")
    private String imageUrl;

    @JsonProperty("name")
    @Column(name = "name")
    private String name;

    @JsonProperty("price")
    @Column(name = "price")
    private double price;

}
