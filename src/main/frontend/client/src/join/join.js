import React, { useState, createContext, useContext, Component } from 'react';
import React from "react";

export default function Join(){
        const [id, setId] = useState('');
        const [pw, setPw] = useState('');
        const [pwchk, setPwChk] = useState('');
        const [email1, setEmail1] = useState('');
        const [email2, setEmail2] = useState('');
        const [phone, setPhone] = useState('');
    
        const [domainList, setDomainList] = useState([
           {title:'네이버', value:'naver.com'},
           {title:'구글', value:'google.com'},
           {title:'한메일', value:'hanmail'},
           {title:'네이트', value:'nate.com'},
           {title:'카카오', value:'kakao.com'}
        ]);
        const [phoneList, setPhoneList] =  ([
           {title:'010', value:'010'},
           {title:'011', value:'011'},
           {title:'016', value:'016'},
           {title:'017', value:'017'},
           {title:'019', value:'019'}
        ]);
    function SelectList(props){
       const opt = []
       opt.push( <option value="">선택없음</option> )
       for(let i=0; i < props.list.length ; i++){
         let t = props.list[i];
         opt.push(
           <option id={t.id} value={t.value}>{t.title}</option>
         )
       }
       return <select id={props.id} onChange={ (e) => { setEmail2(e.target.value);} }>{opt}</select>
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
                            onChange={ (e) => {pwchk(e.target.value)} }/>
                        <p style={{color:"#FF0000",fontSize:"12px"}}> 동일한 비밀번호를 입력해주세요. </p>
                    </Input>
                    <Input>
                        <p>이메일을 입력해주세요.</p>
                        <FlexSt>
                            <EmailInput type="text"/>
                            @
                            <EmailInput type="text" value={email2}/>
                            <SelectList id="domain-list" list={domainList} />
                        </FlexSt>
                    </Input>
                    <Input>
                        <p>핸드폰 번호 입력해주세요.</p>
                        <FlexSt>
                            <SelectList id="phone-list" list={phoneList}/>
                            <EmailInput type="text" placeholder="‘-’ 없이 입력해주세요." maxLength={8}/>
                            <a href='#;' onClick={(e)=>{
                               e.preventDefault();
                               alert("인증번호 발송");
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

