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
    private int id;

    @JsonProperty("title")
    @Column(name = "title")
    private String title;

    @JsonProperty("author")
    @Column(name = "author")
    private String author;

    @JsonProperty("category")
    @Column(name = "category")
    private String category;

    @JsonProperty("price")
    @Column(name = "price")
    private double price;

    @JsonProperty("rating")
    @Column(name = "rating")
    private double rating;

    @JsonProperty("sale_percentage")
    @Column(name = "sale_percentage")
    private double sale;

    @JsonProperty("description")
    @Column(name = "description")
    private String description;

    @JsonProperty("image_url")
    @Column(name = "image_url")
    private String imageUrl;

}
