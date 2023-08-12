package com.blog.blog;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@SpringBootApplication(exclude = {SecurityAutoConfiguration.class})
public class BlogApplication {

	@RequestMapping("/blog")
	String home() {
		return "index1";
	}

	public static void main(String[] args) {
		SpringApplication.run(BlogApplication.class, args);
	}

}
