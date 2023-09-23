import {Wrap, Inner, Input, EmailInput, Tit, FlexSt, Btn, Stick, LinkBtn, SimpleLo} from './styles/emotion'
import React from "react";

export default function Join(){

    return(
        <Wrap>
            <Inner>
                <a href='#;' style={{textDecoration:"none",color:"#999",fontSize:"12px"}}>이전 페이지</a>

                <p>정보입력</p>
                <div>
                    <Input>
                        <p>아이디 입력해주세요.</p>
                        <EmailInput type="text" placeholder='아이디를 입력하세요.'/>
                    </Input>
                    <Input>
                        <p>비밀번호 입력해주세요.</p>
                        <EmailInput type="password" placeholder='6-20자 영문,숫자 특수문자를 조합해서 입력해 주세요.'/>
                    </Input>
                    <Input>
                        <p>비밀번호 다시 입력해주세요.</p>
                        <EmailInput type="password" placeholder='입력하신 비밀번호와 동일하게 입력해 주세요.'/>
                    </Input>
                    <Input>
                        <p>이메일을 입력해주세요.</p>
                        <FlexSt>
                            <EmailInput type="text"/>
                            @
                            <EmailInput type="text"/>
                            <select id="domain-list">
                                <option value="naver.com">naver.com</option>
                                <option value="google.com">google.com</option>
                                <option value="hanmail.net">hanmail.net</option>
                                <option value="nate.com">nate.com</option>
                                <option value="kakao.com">kakao.com</option>
                            </select>
                        </FlexSt>
                    </Input>
                    <Input>
                        <p>핸드폰 번호 입력해주세요.</p>
                        <FlexSt>
                            <select>
                                <option>010</option>
                                <option>011</option>
                            </select>
                            <EmailInput type="text" placeholder="‘-’ 없이 입력해주세요." maxLength={8}/>
                            <a href='#;'>인증번호 발송</a>
                        </FlexSt>
                    </Input>
                </div>
                <FlexSt>
                    <a href='#;'>이전</a>
                    <a href='#;'>P:log 가입</a>
                </FlexSt>
            </Inner>
            
        </Wrap>

    )
}

