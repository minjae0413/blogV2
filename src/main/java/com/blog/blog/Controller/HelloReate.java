package com.blog.blog.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Arrays;
import java.util.List;

@RestController
public class HelloReate {

    @GetMapping("/api/hello")
    public List<String> Hello(){
        return Arrays.asList("서버 포트는 9090", "리액트 포트는 3000.( 해당 문구 나오면 연결 성공한 것임. )");
    }
}