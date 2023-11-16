package com.blog.blog.Api;

import com.blog.blog.DAO.IF_MemberDAO;
import com.blog.blog.VO.MemberVO;
import jakarta.servlet.http.HttpSession;
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
    private IF_MemberDAO if_memberDAO;

    @PostMapping("/join")
    public ResponseEntity<?> addMember(@RequestBody MemberVO memberVO) {
        try {
            MemberVO savedMember = if_memberDAO.save(memberVO);
            return new ResponseEntity<>(savedMember, HttpStatus.CREATED);
        } catch (Exception e) {
            Map<String, String> response = new HashMap<>();
            response.put("error", "회원가입에 실패했습니다.");
            return new ResponseEntity<>(response, HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/join/{no}")
    public ResponseEntity<?> memberJoin(@PathVariable Long no) {
        MemberVO memberVO = this.if_memberDAO.findByNo(no);
        if (memberVO != null) {
            return new ResponseEntity<>(memberVO, HttpStatus.OK);
        } else {
            Map<String, String> response = new HashMap<>();
            response.put("message", "회원을 찾을 수 없습니다.");
            return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> memberLogin(@RequestBody MemberVO data, HttpSession session) {
        MemberVO memberVO = this.if_memberDAO.findByMbId(data.getMbId());

        if (memberVO != null) {
            if (memberVO.getMbPassword().equals(data.getMbPassword())) {
                session.setAttribute("userId", memberVO.getMbId());
                String userId = (String) session.getAttribute("userId");
                System.out.println(userId);
                return new ResponseEntity<>(memberVO, HttpStatus.OK);
            }
        }

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/sessionInfo")
    public ResponseEntity<Map<String, Object>> getSessionInfo(HttpSession session) {
        String userId = (String) session.getAttribute("userId");
        if (userId == null ) {
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }

        Map<String, Object> sessionInfo = new HashMap<>();

        sessionInfo.put("userId", userId);
        return ResponseEntity.ok(sessionInfo);
    }

    @GetMapping("/list")
    public List<MemberVO> getMemberList() {
        return this.if_memberDAO.findAll();
    }


}
