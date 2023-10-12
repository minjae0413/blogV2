package com.blog.blog.Api;

import com.blog.blog.Service.MemberService;
import com.blog.blog.VO.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;


@RestController
@RequestMapping("/api/member")
public class Member {
    //클라이언트와의 상호작용을 처리하는 컨트롤러 클래스입니다.
    @Autowired
    private MemberService memberService;

    @PostMapping("/join")
    public MemberVO addMember(@RequestBody MemberVO memberVO) {
        return memberService.saveMember(memberVO);
    }

    @GetMapping("/join/{no}")
    public ResponseEntity<?> memberJoin(@PathVariable Long no) {
        /*
        MemberVO memberVO = new MemberVO();
        memberVO.setMb_id("아이디");
        memberVO.setMb_password("패스워드");
        memberVO.setMb_email("이메일주소");
        return memberVO;
        */
        MemberVO memberVO = memberService.findByNo(no);
        if (memberVO != null) {
            return new ResponseEntity<>(memberVO, HttpStatus.OK);
        } else {
            Map<String, String> response = new HashMap<>();
            response.put("message", "회원을 찾을 수 없습니다.");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }

        //return "redirect:/login";
    }

    @GetMapping("/list")
    public List<MemberVO> getMemberList() {
        return memberService.getMemberList();
    }


}
