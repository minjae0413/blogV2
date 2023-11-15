package com.blog.blog.DAO;

import com.blog.blog.VO.MemberVO;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import java.util.List;
import java.util.Optional;


public interface IF_MemberDAO extends JpaRepository<MemberVO, Long> {
    // 데이터베이스 와 상호작용하기 위한 리포지토리 인터페이스
    MemberVO findByNo(Long no);
    List<MemberVO> findAll();

    MemberVO findByMbId(String mbId);
}
