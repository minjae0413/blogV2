package com.blog.blog.Config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;


@Configuration
public class CorsConfig implements WebMvcConfigurer {
    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("http://localhost:3000") // 허용할 오리진(도메인)을 여기에 설정
                .allowedMethods("GET", "POST", "PUT", "DELETE") // 허용할 HTTP 메서드를 설정 (필요에 따라 추가)
                .allowedHeaders("*"); // 모든 헤더를 허용 (필요에 따라 수정)
    }
}

// addMapping("/**") 모든 엔드포인트에 CORS를 적용한다는 의미입니다.
// addMapping() 메서드의 경로를 변경하여 특정 엔드포인트에만 적용 가능