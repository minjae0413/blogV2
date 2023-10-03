package com.blog.blog.DAO;

import com.blog.blog.VO.MemberVO;
import org.springframework.data.jpa.repository.JpaRepository;


public interface MemberDAO extends JpaRepository<MemberVO, Long> {
    // 데이터베이스 와 상호작용하기 위한 리포지토리 인터페이스
}
