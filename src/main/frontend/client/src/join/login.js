import {Wrap, Inner, Input, EmailInput, Tit, FlexSt, Btn, Stick, LinkBtn, SimpleLo} from './styles/Emotion'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment , faN} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './styles/Join.css';

export default function Emotion(){

    return(
        <Wrap className='loginWrap'>
            <Inner>
                <Link to={"/"} className="prevBtn">이전 페이지</Link>

                <Tit>로그인</Tit>
                <div>
                    <Input>
                        <EmailInput type="text" placeholder='아이디를 입력하세요.'/>
                    </Input>
                    <Input>
                        <EmailInput type="text" placeholder='비밀번호를 입력하세요.'/>
                    </Input>
                </div>

                <FlexSt className='f-center'>
                    <FlexSt className='mr-20'>
                        <input type='checkbox' id='keepLogin' />
                        <label for='keepLogin'>로그인 상태 유지</label>
                    </FlexSt>
                    <FlexSt>
                        <input type='checkbox' id='saveId' />
                        <label for='saveId'>아이디 저장하기</label>
                    </FlexSt>
                </FlexSt>

                <div style={{textAlign:"center"}}>
                    <Btn type='button'>로그인</Btn>
                </div>

                <FlexSt className='f-between linkWrap' style={{margin:"5% auto",  width: "70%"}}>
                    <Link to="/FindID">아이디 찾기</Link>
                    <Stick></Stick>
                    <Link to="/FindPW">비밀번호 찾기</Link>
                    <Stick></Stick>
                    <Link to="/Join" >회원가입</Link>
                </FlexSt>
                
                <h4 className='tc' style={{margin:"5% auto",fontSize:"13px"}}>간편 로그인</h4>
                <FlexSt className='f-center' style={{marginTop:"5%",width:"40%",margin:"0 auto"}}>
                    <SimpleLo className='mr-20' href="#;" style={{background:"#ffe812"}}><FontAwesomeIcon icon={faComment} /></SimpleLo>
                    <SimpleLo className='naverIcon' href="#;" style={{background:"#2db400"}}><FontAwesomeIcon icon={faN}/></SimpleLo>
                </FlexSt>
            </Inner>
            
        </Wrap>

    )
}

