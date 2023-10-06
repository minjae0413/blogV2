import React, { useState, createContext, useContext, Component, useEffeact } from 'react';
import {Wrap, Inner, Input, EmailInput,  FlexSt, Tit} from './styles/emotion';
import axios from "axios";
import './styles/Join.css';
import { Link } from "react-router-dom";


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
        const data = {
            'id' : id,
            'pw' : pw,
            'email' : email1+'@'+email2,
        };

        const jsonData = JSON.stringify(data);

        axios.post('http://localhost:9090/api/member/join', jsonData, {
                headers: {
                    'Content-Type': 'application/json', // 요청 헤더에 JSON 형식임을 명시
                },
            })
            .then( response => {
                console.log(response);
            })
            .catch( error => {
                console.log(error);
            });
    }

    return(
        <Wrap className='joinWrap'>
            <Inner>
                <Link to={"/"} className="prevBtn">이전 페이지</Link>
                <Tit>정보입력</Tit>
                <div>
                    <Input>
                        <h3>아이디 입력해주세요.</h3>
                        <EmailInput type="text" value={id} placeholder='아이디를 입력하세요.'
                            onChange={ (e) => { setId(e.target.value) } }/>
                    </Input>
                    <Input>
                        <h3>비밀번호 입력해주세요.</h3>
                        <EmailInput type="password" value={pw} placeholder='6-20자 영문,숫자 특수문자를 조합해서 입력해 주세요.'
                            onChange={ (e) => { setPw(e.target.value) } }/>
                    </Input>
                    <Input>
                        <h3>비밀번호 다시 입력해주세요.</h3>
                        <EmailInput type="password" value={pwchk} placeholder='입력하신 비밀번호와 동일하게 입력해 주세요.'
                            onChange={ (e) => {setPwChk(e.target.value)} }/>
                            <p className="mt-5" style={{color:"#FF0000",fontSize:"12px"}}> 동일한 비밀번호를 입력해주세요. </p>
                    </Input>
                    <Input>
                        <h3>이메일을 입력해주세요.</h3>
                        <FlexSt>
                            <EmailInput type="text" />
                            <p className='ml-5 mr-5'>@</p>
                            <EmailInput type="text" value={email2}/>
                            <select id="domain-list" onChange={(e) =>{setEmail2(e.target.value)} } className='ml-10'>
                                <option value="naver.com">naver.com</option>
                                <option value="google.com">google.com</option>
                                <option value="hanmail.net">hanmail.net</option>
                                <option value="nate.com">nate.com</option>
                                <option value="kakao.com">kakao.com</option>
                            </select>

                        </FlexSt>
                    </Input>
                    <Input>
                        <h3>핸드폰 번호 입력해주세요.</h3>
                        <FlexSt>
                            <select id="phone-list" className='mr-10'>
                                <option>010</option>
                                <option>011</option>
                                <option>016</option>
                            </select>
                            <EmailInput type="text" placeholder="‘-’ 없이 입력해주세요." maxLength={8}/>
                            <button className='ml-10' onClick={(e)=>{
                                e.preventDefault();
                                alert("인증번호 발송");
                                dataSubmit();
                            }}>인증번호 발송</button>
                        </FlexSt>
                    </Input>
                </div>
                <div className='f-center'>
                    <Link to={"/"} className='prevbt mr-10'>이전</Link>
                    <button>P:log 가입</button>
                </div>
            </Inner>
            
        </Wrap>

    )
}

