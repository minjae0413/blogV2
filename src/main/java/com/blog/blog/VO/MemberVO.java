package com.blog.blog.VO;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "member")
public class MemberVO {
        // 회원 정보 표현하는 객체 데이터베이스 테이블과 매핑 될 수 있다
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
    	private Integer No;
        private String mb_id;
        private String mb_password;
        private String mb_name;
        private String mb_nick;
        private Date mb_nick_date;
        private String mb_email;
        private String mb_homepage;
        private Integer mb_level;
        private String mb_sex;
        private String mb_birth;
        private String mb_tel;
        private String mb_hp;
        private String mb_certify;
        private Integer mb_adult;
        private String mb_dupinfo;
        private String mb_zip1;
        private String mb_zip2;
        private String mb_addr1;
        private String mb_addr2;
        private String mb_addr3;
        private String mb_addr_jibeon;
        @Column(columnDefinition = "text")
        private String mb_signature;
        private String mb_recommend;
        private Integer mb_point;
        private Date mb_today_login;
        private String mb_login_ip;
        private Date mb_datetime;
        private String mb_ip;
        private String mb_leave_date;
        private String mb_intercept_date;
        private Date mb_email_certify;
        private String mb_email_certify2;
        @Column(columnDefinition = "text")
        private String mb_memo;
        private String mb_lost_certify;
        private Integer mb_mailling;
        private Integer mb_sms;
        private Integer mb_open;
        private Date mb_open_date;
        @Column(columnDefinition = "text")
        private String mb_profile;
        private String mb_memo_call;

        public Integer getNo() {
                return No;
        }

        public void setNo(Integer no) {
                No = no;
        }

        public String getMb_id() {
                return mb_id;
        }

        public void setMb_id(String mb_id) {
                this.mb_id = mb_id;
        }

        public String getMb_password() {
                return mb_password;
        }

        public void setMb_password(String mb_password) {
                this.mb_password = mb_password;
        }

        public String getMb_name() {
                return mb_name;
        }

        public void setMb_name(String mb_name) {
                this.mb_name = mb_name;
        }

        public String getMb_nick() {
                return mb_nick;
        }

        public void setMb_nick(String mb_nick) {
                this.mb_nick = mb_nick;
        }

        public Date getMb_nick_date() {
                return mb_nick_date;
        }

        public void setMb_nick_date(Date mb_nick_date) {
                this.mb_nick_date = mb_nick_date;
        }

        public String getMb_email() {
                return mb_email;
        }

        public void setMb_email(String mb_email) {
                this.mb_email = mb_email;
        }

        public String getMb_homepage() {
                return mb_homepage;
        }

        public void setMb_homepage(String mb_homepage) {
                this.mb_homepage = mb_homepage;
        }

        public Integer getMb_level() {
                return mb_level;
        }

        public void setMb_level(Integer mb_level) {
                this.mb_level = mb_level;
        }

        public String getMb_sex() {
                return mb_sex;
        }

        public void setMb_sex(String mb_sex) {
                this.mb_sex = mb_sex;
        }

        public String getMb_birth() {
                return mb_birth;
        }

        public void setMb_birth(String mb_birth) {
                this.mb_birth = mb_birth;
        }

        public String getMb_tel() {
                return mb_tel;
        }

        public void setMb_tel(String mb_tel) {
                this.mb_tel = mb_tel;
        }

        public String getMb_hp() {
                return mb_hp;
        }

        public void setMb_hp(String mb_hp) {
                this.mb_hp = mb_hp;
        }

        public String getMb_certify() {
                return mb_certify;
        }

        public void setMb_certify(String mb_certify) {
                this.mb_certify = mb_certify;
        }

        public Integer getMb_adult() {
                return mb_adult;
        }

        public void setMb_adult(Integer mb_adult) {
                this.mb_adult = mb_adult;
        }

        public String getMb_dupinfo() {
                return mb_dupinfo;
        }

        public void setMb_dupinfo(String mb_dupinfo) {
                this.mb_dupinfo = mb_dupinfo;
        }

        public String getMb_zip1() {
                return mb_zip1;
        }

        public void setMb_zip1(String mb_zip1) {
                this.mb_zip1 = mb_zip1;
        }

        public String getMb_zip2() {
                return mb_zip2;
        }

        public void setMb_zip2(String mb_zip2) {
                this.mb_zip2 = mb_zip2;
        }

        public String getMb_addr1() {
                return mb_addr1;
        }

        public void setMb_addr1(String mb_addr1) {
                this.mb_addr1 = mb_addr1;
        }

        public String getMb_addr2() {
                return mb_addr2;
        }

        public void setMb_addr2(String mb_addr2) {
                this.mb_addr2 = mb_addr2;
        }

        public String getMb_addr3() {
                return mb_addr3;
        }

        public void setMb_addr3(String mb_addr3) {
                this.mb_addr3 = mb_addr3;
        }

        public String getMb_addr_jibeon() {
                return mb_addr_jibeon;
        }

        public void setMb_addr_jibeon(String mb_addr_jibeon) {
                this.mb_addr_jibeon = mb_addr_jibeon;
        }

        public String getMb_signature() {
                return mb_signature;
        }

        public void setMb_signature(String mb_signature) {
                this.mb_signature = mb_signature;
        }

        public String getMb_recommend() {
                return mb_recommend;
        }

        public void setMb_recommend(String mb_recommend) {
                this.mb_recommend = mb_recommend;
        }

        public Integer getMb_point() {
                return mb_point;
        }

        public void setMb_point(Integer mb_point) {
                this.mb_point = mb_point;
        }

        public Date getMb_today_login() {
                return mb_today_login;
        }

        public void setMb_today_login(Date mb_today_login) {
                this.mb_today_login = mb_today_login;
        }

        public String getMb_login_ip() {
                return mb_login_ip;
        }

        public void setMb_login_ip(String mb_login_ip) {
                this.mb_login_ip = mb_login_ip;
        }

        public Date getMb_datetime() {
                return mb_datetime;
        }

        public void setMb_datetime(Date mb_datetime) {
                this.mb_datetime = mb_datetime;
        }

        public String getMb_ip() {
                return mb_ip;
        }

        public void setMb_ip(String mb_ip) {
                this.mb_ip = mb_ip;
        }

        public String getMb_leave_date() {
                return mb_leave_date;
        }

        public void setMb_leave_date(String mb_leave_date) {
                this.mb_leave_date = mb_leave_date;
        }

        public String getMb_intercept_date() {
                return mb_intercept_date;
        }

        public void setMb_intercept_date(String mb_intercept_date) {
                this.mb_intercept_date = mb_intercept_date;
        }

        public Date getMb_email_certify() {
                return mb_email_certify;
        }

        public void setMb_email_certify(Date mb_email_certify) {
                this.mb_email_certify = mb_email_certify;
        }

        public String getMb_email_certify2() {
                return mb_email_certify2;
        }

        public void setMb_email_certify2(String mb_email_certify2) {
                this.mb_email_certify2 = mb_email_certify2;
        }

        public String getMb_memo() {
                return mb_memo;
        }

        public void setMb_memo(String mb_memo) {
                this.mb_memo = mb_memo;
        }

        public String getMb_lost_certify() {
                return mb_lost_certify;
        }

        public void setMb_lost_certify(String mb_lost_certify) {
                this.mb_lost_certify = mb_lost_certify;
        }

        public Integer getMb_mailling() {
                return mb_mailling;
        }

        public void setMb_mailling(Integer mb_mailling) {
                this.mb_mailling = mb_mailling;
        }

        public Integer getMb_sms() {
                return mb_sms;
        }

        public void setMb_sms(Integer mb_sms) {
                this.mb_sms = mb_sms;
        }

        public Integer getMb_open() {
                return mb_open;
        }

        public void setMb_open(Integer mb_open) {
                this.mb_open = mb_open;
        }

        public Date getMb_open_date() {
                return mb_open_date;
        }

        public void setMb_open_date(Date mb_open_date) {
                this.mb_open_date = mb_open_date;
        }

        public String getMb_profile() {
                return mb_profile;
        }

        public void setMb_profile(String mb_profile) {
                this.mb_profile = mb_profile;
        }

        public String getMb_memo_call() {
                return mb_memo_call;
        }

        public void setMb_memo_call(String mb_memo_call) {
                this.mb_memo_call = mb_memo_call;
        }
}
