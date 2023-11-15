package com.blog.blog.VO;

import jakarta.persistence.*;
import java.util.Date;

@Entity
@Table(name = "member")
public class MemberVO {
        // 회원 정보 표현하는 객체 데이터베이스 테이블과 매핑 될 수 있다
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
    	private Long no;
        @Column(name="mb_id")
        private String mbId;
        @Column(name="mb_password")
        private String mbPassword;
        @Column(name="mb_name")
        private String mbName;
        @Column(name="mb_nick")
        private String mbNick;
        @Column(name="mb_nick_date")
        private Date mbNickDate;
        @Column(name="mb_email")
        private String mbEmail;
        @Column(name="mb_homepage")
        private String mbHomepage;
        @Column(name="mb_level")
        private Integer mbLevel;
        @Column(name="mb_sex")
        private String mbSex;
        @Column(name="mb_birth")
        private String mbBirth;
        @Column(name="mb_tel")
        private String mbTel;
        @Column(name="mb_hp")
        private String mbHp;
        @Column(name="mb_certify")
        private String mbCertify;
        @Column(name="mb_adult")
        private Integer mbAdult;
        @Column(name="mb_dupinfo")
        private String mbDupinfo;
        @Column(name="mb_zip1")
        private String mbZip1;
        @Column(name="mb_zip2")
        private String mbZip2;
        @Column(name="mb_addr1")
        private String mbAddr1;
        @Column(name="mb_addr2")
        private String mbAddr2;
        @Column(name="mb_addr3")
        private String mbAddr3;
        @Column(name="mb_addr_jibeon")
        private String mbAddrJibeon;
        @Column(name="mb_signature", columnDefinition = "text")
        private String mbSignature;
        @Column(name="mb_recommend")
        private String mbRecommend;
        @Column(name="mb_point")
        private Integer mbPoint;
        @Column(name="mb_today_login")
        private Date mbTodayLogin;
        @Column(name="mb_login_ip")
        private String mbLoginIp;
        @Column(name="mb_datetime")
        private Date mbDatetime;
        @Column(name="mb_ip")
        private String mbIp;
        @Column(name="mb_leave_date")
        private String mbLeaveDate;
        @Column(name="mb_intercept_date")
        private String mbInterceptDate;
        @Column(name="mb_email_certify")
        private Date mbEmailCertify;
        @Column(name="mb_email_certify2")
        private String mbEmailCertify2;

        @Column(name="mb_memo",columnDefinition = "text")
        private String mbMemo;
        @Column(name="mb_lost_certify")
        private String mbLostCertify;
        @Column(name="mb_mailling")
        private Integer mbMailling;
        @Column(name="mb_sms")
        private Integer mbSms;
        @Column(name="mb_open")
        private Integer mbOpen;
        @Column(name="mb_open_date")
        private Date mbOpenDate;
        @Column(name="mb_profile", columnDefinition = "text")
        private String mbProfile;
        @Column(name="mb_memo_call")
        private String mbMemoCall;

        public Long getNo() { return no; }

        public void setNo(Long no) { this.no = no; }

        public String getMbId() {
                return mbId;
        }

        public void setMbId(String mbId) {
                this.mbId = mbId;
        }

        public String getMbPassword() {
                return mbPassword;
        }

        public void setMbPassword(String mbPassword) {
                this.mbPassword = mbPassword;
        }

        public String getMbName() {
                return mbName;
        }

        public void setMbName(String mbName) {
                this.mbName = mbName;
        }

        public String getMbNick() {
                return mbNick;
        }

        public void setMbNick(String mbNick) {
                this.mbNick = mbNick;
        }

        public Date getMbNickDate() {
                return mbNickDate;
        }

        public void setMbNickDate(Date mbNickDate) {
                this.mbNickDate = mbNickDate;
        }

        public String getMbEmail() {
                return mbEmail;
        }

        public void setMbEmail(String mbEmail) {
                this.mbEmail = mbEmail;
        }

        public String getMbHomepage() {
                return mbHomepage;
        }

        public void setMbHomepage(String mbHomepage) {
                this.mbHomepage = mbHomepage;
        }

        public Integer getMbLevel() {
                return mbLevel;
        }

        public void setMbLevel(Integer mbLevel) {
                this.mbLevel = mbLevel;
        }

        public String getMbSex() {
                return mbSex;
        }

        public void setMbSex(String mbSex) {
                this.mbSex = mbSex;
        }

        public String getMbBirth() {
                return mbBirth;
        }

        public void setMbBirth(String mbBirth) {
                this.mbBirth = mbBirth;
        }

        public String getMbTel() {
                return mbTel;
        }

        public void setMbTel(String mbTel) {
                this.mbTel = mbTel;
        }

        public String getMbHp() {
                return mbHp;
        }

        public void setMbHp(String mbHp) {
                this.mbHp = mbHp;
        }

        public String getMbCertify() {
                return mbCertify;
        }

        public void setMbCertify(String mbCertify) {
                this.mbCertify = mbCertify;
        }

        public Integer getMbAdult() {
                return mbAdult;
        }

        public void setMbAdult(Integer mbAdult) {
                this.mbAdult = mbAdult;
        }

        public String getMbDupinfo() {
                return mbDupinfo;
        }

        public void setMbDupinfo(String mbDupinfo) {
                this.mbDupinfo = mbDupinfo;
        }

        public String getMbZip1() {
                return mbZip1;
        }

        public void setMbZip1(String mbZip1) {
                this.mbZip1 = mbZip1;
        }

        public String getMbZip2() {
                return mbZip2;
        }

        public void setMbZip2(String mbZip2) {
                this.mbZip2 = mbZip2;
        }

        public String getMbAddr1() {
                return mbAddr1;
        }

        public void setMbAddr1(String mbAddr1) {
                this.mbAddr1 = mbAddr1;
        }

        public String getMbAddr2() {
                return mbAddr2;
        }

        public void setMbAddr2(String mbAddr2) {
                this.mbAddr2 = mbAddr2;
        }

        public String getMbAddr3() {
                return mbAddr3;
        }

        public void setMbAddr3(String mbAddr3) {
                this.mbAddr3 = mbAddr3;
        }

        public String getMbAddrJibeon() {
                return mbAddrJibeon;
        }

        public void setMbAddrJibeon(String mbAddrJibeon) {
                this.mbAddrJibeon = mbAddrJibeon;
        }

        public String getMbSignature() {
                return mbSignature;
        }

        public void setMbSignature(String mbSignature) {
                this.mbSignature = mbSignature;
        }

        public String getMbRecommend() {
                return mbRecommend;
        }

        public void setMbRecommend(String mbRecommend) {
                this.mbRecommend = mbRecommend;
        }

        public Integer getMbPoint() {
                return mbPoint;
        }

        public void setMbPoint(Integer mbPoint) {
                this.mbPoint = mbPoint;
        }

        public Date getMbTodayLogin() {
                return mbTodayLogin;
        }

        public void setMbTodayLogin(Date mbTodayLogin) {
                this.mbTodayLogin = mbTodayLogin;
        }

        public String getMbLoginIp() {
                return mbLoginIp;
        }

        public void setMbLoginIp(String mbLoginIp) {
                this.mbLoginIp = mbLoginIp;
        }

        public Date getMbDatetime() {
                return mbDatetime;
        }

        public void setMbDatetime(Date mbDatetime) {
                this.mbDatetime = mbDatetime;
        }

        public String getMbIp() {
                return mbIp;
        }

        public void setMbIp(String mbIp) {
                this.mbIp = mbIp;
        }

        public String getMbLeaveDate() {
                return mbLeaveDate;
        }

        public void setMbLeaveDate(String mbLeaveDate) {
                this.mbLeaveDate = mbLeaveDate;
        }

        public String getMbInterceptDate() {
                return mbInterceptDate;
        }

        public void setMbInterceptDate(String mbInterceptDate) {
                this.mbInterceptDate = mbInterceptDate;
        }

        public Date getMbEmailCertify() {
                return mbEmailCertify;
        }

        public void setMbEmailCertify(Date mbEmailCertify) {
                this.mbEmailCertify = mbEmailCertify;
        }

        public String getMbEmailCertify2() {
                return mbEmailCertify2;
        }

        public void setMbEmailCertify2(String mbEmailCertify2) {
                this.mbEmailCertify2 = mbEmailCertify2;
        }

        public String getMbMemo() {
                return mbMemo;
        }

        public void setMbMemo(String mbMemo) {
                this.mbMemo = mbMemo;
        }

        public String getMbLostCertify() {
                return mbLostCertify;
        }

        public void setMbLostCertify(String mbLostCertify) {
                this.mbLostCertify = mbLostCertify;
        }

        public Integer getMbMailling() {
                return mbMailling;
        }

        public void setMbMailling(Integer mbMailling) {
                this.mbMailling = mbMailling;
        }

        public Integer getMbSms() {
                return mbSms;
        }

        public void setMbSms(Integer mbSms) {
                this.mbSms = mbSms;
        }

        public Integer getMbOpen() {
                return mbOpen;
        }

        public void setMbOpen(Integer mbOpen) {
                this.mbOpen = mbOpen;
        }

        public Date getMbOpenDate() {
                return mbOpenDate;
        }

        public void setMbOpenDate(Date mbOpenDate) {
                this.mbOpenDate = mbOpenDate;
        }

        public String getMbProfile() {
                return mbProfile;
        }

        public void setMbProfile(String mbProfile) {
                this.mbProfile = mbProfile;
        }

        public String getMbMemoCall() {
                return mbMemoCall;
        }

        public void setMbMemoCall(String mbMemoCall) {
                this.mbMemoCall = mbMemoCall;
        }
}
