import React, { useState, createContext, useContext, Component, useEffeact } from 'react';
import {Wrap, Inner, Input, EmailInput,  FlexSt} from './styles/emotion';
import axios from "axios";

export default function Join(){
        const [id, setId] = useState('');
        const [pw, setPw] = useState('');
        const [pwchk, setPwChk] = useState('');
        const [email1, setEmail1] = useState('');
        const [email2, setEmail2] = useState('');
        const [phone, setPhone] = useState('');

    /*
    useEffeact( () => {
        axios.("https://localhost:9090/api/member/join",{
            userId : id,
            userPw : pw,
            userEmail : email1."@".emotion,
        })
        .then( (response) => {
            console.log(response);
        })
        .catch( (error) => {
            console.log(error);
        })
    })
    */

    const dataSubmit = (e) => {
        const formData = new FormData();
        console.log(id);
        console.log(pw);
        console.log(email1+'@'+email2);
        formData.append('id', id);
        formData.append('pw', pw);
        formData.append('email',email1+'@'+email2);


        axios({
          method:'post',
          url:'localhost:9090/api/member/join',
          data: formData,
        }).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.log(error);
        })
    }

    return(
        <Wrap>
            <Inner>
                <a href='#;' style={{textDecoration:"none",color:"#999",fontSize:"12px"}}>이전 페이지</a>
                <p>정보입력</p>
                <div>
                    <Input>
                        <p>아이디 입력해주세요.</p>
                        <EmailInput type="text" value={id} placeholder='아이디를 입력하세요.'
                         onChange={ (e) => { setId(e.target.value) } }/>
                    </Input>
                    <Input>
                        <p>비밀번호 입력해주세요.</p>
                        <EmailInput type="password" value={pw} placeholder='6-20자 영문,숫자 특수문자를 조합해서 입력해 주세요.'
                         onChange={ (e) => { setPw(e.target.value) } }/>
                    </Input>
                    <Input>
                        <p>비밀번호 다시 입력해주세요.</p>
                        <EmailInput type="password" value={pwchk} placeholder='입력하신 비밀번호와 동일하게 입력해 주세요.'
                            onChange={ (e) => {setPwChk(e.target.value)} }/>
                        <p style={{color:"#FF0000",fontSize:"12px"}}> 동일한 비밀번호를 입력해주세요. </p>
                    </Input>
                    <Input>
                        <p>이메일을 입력해주세요.</p>
                        <FlexSt>
                            <EmailInput type="text" />
                            @
                            <EmailInput type="text" value={email2}/>
                            <select id="domain-list" onChange={(e) =>{setEmail2(e.target.value)} }>
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
                            <select id="phone-list">
                                <option>010</option>
                                <option>011</option>
                            </select>
                            <EmailInput type="text" placeholder="‘-’ 없이 입력해주세요." maxLength={8}/>
                            <a href='#;' onClick={(e)=>{
                               e.preventDefault();
                               alert("인증번호 발송");
                               dataSubmit();
                            }}>인증번호 발송</a>
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

