package com.blog.blog.Api;

import com.blog.blog.Service.MemberService;
import com.blog.blog.DTO.MemberDTO;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;



@RequiredArgsConstructor
@RestController
@RequestMapping("/api/member")
@CrossOrigin(origins = "http://localhost:3000") // React 앱의 도메인을 여기에 설정
public class Member {
    @Autowired
    private final MemberService memberService;

    @PostMapping("/join")
    public ResponseEntity<String> joinMember(@RequestBody MemberDTO memberDTO) {
        // 여기서 MemberDTO는 요청 바디의 JSON 데이터를 자동으로 매핑할 클래스입니다.
        // 실제로는 MemberDTO를 정의하고 필드를 추가해야 합니다.

        // 처리 로직을 작성하고 결과를 반환
        // 예를 들어, 회원 가입 처리 후 결과를 문자열로 반환하면 됩니다.
        String result = memberService.join(memberDTO);

        return ResponseEntity.ok(result);
    }

    @GetMapping("/join")
    public String memberJoin() {
        return "redirect:/login";
    }

}
