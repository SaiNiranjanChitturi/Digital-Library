package com.springanil.DigitalLibrary;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages = "com.springanil.DigitalLibrary")
@EnableJpaRepositories(basePackages = "com.springanil.DigitalLibrary.repository")

public class DigitalLibraryApplication {

	public static void main(String[] args) {
		SpringApplication.run(DigitalLibraryApplication.class, args);

	}

}
