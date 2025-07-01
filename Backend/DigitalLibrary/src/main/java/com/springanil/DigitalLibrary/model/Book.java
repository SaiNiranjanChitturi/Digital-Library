package com.springanil.DigitalLibrary.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.fasterxml.jackson.annotation.JsonProperty;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "books")
public class Book {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
    private double sale_percentage;

    @JsonProperty("description")
    @Column(name = "description")
    private String description;

    @JsonProperty("image_url")
    @Column(name = "image_url")
    private String image_url;

    @JsonProperty("on_sale")
    @Column(name = "on_sale")
    private boolean onSale;
    public boolean isOnSale() {
        return onSale;
    }

    @JsonProperty("discount")
    @Column(name = "discount")
    private double discount;
    public double getDiscount() {
        return this.discount;
    }
}
