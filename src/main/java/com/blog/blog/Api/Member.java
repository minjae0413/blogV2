package com.blog.blog.Api;

import com.blog.blog.Service.MemberService;
import com.blog.blog.DTO.MemberDTO;
import com.blog.blog.VO.MemberVO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
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


    public ResponseEntity<String> joinMember(@RequestBody MemberDTO memberDTO) {
        // 여기서 MemberDTO는 요청 바디의 JSON 데이터를 자동으로 매핑할 클래스입니다.
        // 실제로는 MemberDTO를 정의하고 필드를 추가해야 합니다.

        // 처리 로직을 작성하고 결과를 반환
        // 예를 들어, 회원 가입 처리 후 결과를 문자열로 반환하면 됩니다.
        String result = memberService.join(memberDTO);
        //memberService.registerMember(memberDTO);
        //return ResponseEntity.ok("회원 가입이 성공적으로 완료되었습니다.");
        return ResponseEntity.ok(result);
    }



}
