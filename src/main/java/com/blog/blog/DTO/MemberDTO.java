package com.blog.blog.DTO;


public class MemberDTO {
    // 클라이언트에 전달되는 값을 담는 객체
    private String id;
    private String pw;
    private String email;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getPw() {
        return pw;
    }

    public void setPw(String pw) {
        this.pw = pw;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}