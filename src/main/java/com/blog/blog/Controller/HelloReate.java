package com.blog.blog.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloReate {

    @GetMapping("/api/hello")
    public String test() {
        return "Hello, React!";
    }
}