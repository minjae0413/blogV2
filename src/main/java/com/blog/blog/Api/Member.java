package com.blog.blog.Api;

import com.blog.blog.Service.MemberService;
import com.blog.blog.VO.MemberVO;
import lombok.RequiredArgsConstructor;
import org.springframework.core.io.FileSystemResource;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.io.File;
import java.net.URLEncoder;


@Controller
@RequiredArgsConstructor
@RequestMapping("/api/member")
public class Member {
    private MemberService memberService;


    @PostMapping("/join")
    @ResponseBody
    public String memberJoin(@ModelAttribute MemberVO memberVo) {
        try {
            System.out.println(memberVo);
            //memberService.joinUser(memberVo);
            return "redirect:/login";
        } catch (Exception e) {
            return e.toString();
        }
    }

    @GetMapping("/join")
    public String memberJoin() {
        return "redirect:/login";
    }

}
