import React, { useState, createContext, useContext, Component, useEffeact } from 'react';
import {Wrap, Inner, Input, EmailInput,  FlexSt, Tit,Stick,Btn} from './styles/Emotion';
import axios from "axios";
import './styles/Join.css';
import { Link, useNavigate  } from "react-router-dom";

export default function findID(){

    return(
        <Wrap className='findPWWrap'>
            <Inner>
                <Link to={"/"} className="prevBtn">이전 페이지</Link>
                <Tit>비밀번호 찾기</Tit>
                <div className='inputWrap'>
                    <Input>
                        <h3 className='mb-10'>핸드폰 번호 입력해주세요.</h3>
                        <FlexSt>
                            <EmailInput type="text" placeholder="‘-’ 없이 번호만 입력해주세요." maxLength={11}/>
                            <button className='ml-10 buttonST' onClick={(e)=>{}}>인증번호 발송</button>
                        </FlexSt>
                    </Input>

                    <Input>
                        <h3 className='mb-10'>인증번호를 입력해주세요.</h3>
                        <FlexSt>
                            <EmailInput type="text" placeholder="인증번호를 입력해주세요." maxLength={11}/>
                            <button className='ml-10 buttonST' onClick={(e)=>{}}>인증하기</button>
                        </FlexSt>
                    </Input>
                </div>
                <div className='tc'>
                    <Btn lassName='ml-10' onClick={(e)=>{}} type='button'>확인</Btn>
                </div>
            </Inner>
            
        </Wrap>

    )
}

