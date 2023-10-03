package com.blog.blog.VO;

import jakarta.persistence.*;
import org.w3c.dom.Text;
import java.util.Date;

@Entity
@Table(name = "members")
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
        private Text mb_signature;
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
        private Text mb_memo;
        private String mb_lost_certify;
        private Integer mb_mailling;
        private Integer mb_sms;
        private Integer mb_open;
        private Date mb_open_date;
        private Text mb_profile;
        private String mb_memo_call;
}
