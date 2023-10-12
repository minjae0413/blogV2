package com.blog.blog.Service;

import com.blog.blog.DAO.IF_MemberDAO;
import com.blog.blog.VO.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class MemberService {
    // 서비스 기능 파일
    @Autowired
    private IF_MemberDAO memberDAO;

    public MemberVO findByNo(Long no) {
        return memberDAO.findByNo(no);
    }

    public List<MemberVO> getMemberList() {
        return memberDAO.findAll();
    }

    public MemberVO saveMember(MemberVO member) {
        return memberDAO.save(member);
    }



}
