import React, { useState, createContext, useContext, Component, useEffeact } from 'react';
import {Wrap, Inner, Input, EmailInput,  FlexSt, Tit,Stick} from './styles/emotion';
import axios from "axios";
import './styles/Join.css';
import { Link, useNavigate  } from "react-router-dom";

export default function findID(){

    return(
        <Wrap className='findIDWrap'>
            <Inner>
                <Link to={"/"} className="prevBtn">이전 페이지</Link>
                <Tit>아이디 찾기</Tit>
                <div>
                    <Input>
                        <h3 className='mb-10'>핸드폰 번호 입력해주세요.</h3>
                        <FlexSt>
                            <EmailInput type="text" placeholder="‘-’ 없이 번호만 입력해주세요." maxLength={11}/>
                            <button className='ml-10' onClick={(e)=>{}}>인증번호 발송</button>
                        </FlexSt>
                    </Input>
                </div>
                <FlexSt className='f-center linkWrap'>
                    <Link to={"/FindPW"} className='prevbt mr-10'>비밀번호 찾기</Link>
                    <Stick></Stick>
                    <Link to={"/Login"} className='ml-10'>로그인 페이지</Link>
                </FlexSt>
            </Inner>
            
        </Wrap>

    )
}

