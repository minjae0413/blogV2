package com.blog.blog.Service;

import com.blog.blog.DAO.IF_MemberDAO;
import com.blog.blog.DTO.MemberDTO;
import com.blog.blog.VO.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class MemberService {
    // 서비스 기능 파일
    @Autowired
    private IF_MemberDAO memberDAO;

    public MemberVO findByNo(Long no) {
        return memberDAO.findByNo(no);
    }

    public MemberVO saveMember(MemberVO member) {
        return memberDAO.save(member);
    }
    public String join(MemberDTO memberDTO) {
        // 회원 가입 처리 로직을 작성
        // 예를 들어, 회원 정보를 데이터베이스에 저장하고 성공/실패 여부를 반환합니다.
        // 이 예제에서는 단순히 성공 문자열을 반환하는 것으로 가정합니다.


        MemberVO MemberVO = new MemberVO();
        MemberVO.setMb_id(memberDTO.getId());
        MemberVO.setMb_password(memberDTO.getPw());
        MemberVO.setMb_email(memberDTO.getEmail());

        //memberDAO.saveMember(MemberVO);

        return "회원 가입이 성공적으로 완료되었습니다.";
    }
}
