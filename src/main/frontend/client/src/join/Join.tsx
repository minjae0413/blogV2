import React, { useState ,useEffect} from 'react';
import {Wrap, Inner, Input, EmailInput,  FlexSt, Tit} from './styles/Emotion';
import axios from "axios";
import './styles/Join.css';
import { Link, useNavigate  } from "react-router-dom";

interface PasswordType {
    type: string;
    visible: boolean;
}

export default function Join (){
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [pwchk, setPwChk] = useState('');
    const [email1, setEmail1] = useState('');
    const [email2, setEmail2] = useState('');
    const [phone1, setPhone1] = useState('010');
    const [phone2, setPhone2] = useState('');

    const regex = /^[0-9]+$/;

    useEffect(() => {
        // 서버에서 데이터를 호출
        axios.get('http://localhost:9090/api/member/join/3')
        .then((response) => {
            // 서버 응답을 처리하고 상태를 업데이트
            console.log(response.data);
        })
        .catch((error) => {
            console.error('데이터 호출 중 오류 발생:', error);
        });
    }, []);

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

    const dataSubmit = () => {
        if (name == '') {
            console.log("name");
            return false;
        }

        if (id == '') {
            console.log("id");
            return false;
        }

        if (pw == '') {
            console.log("pw");
            return false;
        } else if (pw != pwchk) {
            console.log("pw : pwchk");
            return false;
        }

        if (email1 == '') {
            console.log("email1");
            return false;
        } else if (email2 == '') {
            console.log("email2");
            return false;
        }

        if (phone1 == '') {
            console.log("phone1");
            return false;
        } else if (phone2 == '') {
            console.log("phone2");
            return false;
        }

        const data = {
            'mbId' : id,
            'mbPassword' : pw,
            'mbEmail' : email1+'@'+email2,
            'mbHp' : phone1+''+phone2,
        };

        const jsonData = JSON.stringify(data);
        console.log(jsonData);

        axios.post('http://localhost:9090/api/member/join', jsonData, {
                headers: {
                    'Content-Type': 'application/json', // 요청 헤더에 JSON 형식임을 명시
                },
            })
            .then( response => {
                alert("회원가입 되었습니다.\n로그인 화면으로 이동합니다.");
                navigate("/join");
            })
            .catch( error => {
                console.log(error);
            });
    }

    const [text, setText] = useState('');
    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const [pwType, setPwType] = useState<{ pw: PasswordType; pwchk: PasswordType }>({
        pw: { type: "password", visible: false },
        pwchk: { type: "password", visible: false },
    });

    const handlePasswordTypePw = () => {
        setPwType((prev) => ({
        ...prev,
        pw: {
            type: prev.pw.visible ? "password" : "text",
            visible: !prev.pw.visible,
        },
        }));
    };
    
    const handlePasswordTypePwchk = () => {
        setPwType((prev) => ({
        ...prev,
        pwchk: {
            type: prev.pwchk.visible ? "password" : "text",
            visible: !prev.pwchk.visible,
        },
        }));
    };
    
    return(
        <Wrap className='joinWrap'>
            <Inner>
                <Link to={"/"} className="prevBtn">이전 페이지</Link>
                <Tit>정보입력</Tit>
                <div>
                    <Input>
                        <h3>이름을 입력해주세요.</h3>
                        <EmailInput type="text" value={name} placeholder='이름을 입력하세요.'
                            onChange={ (e) => { setName(e.target.value) } }/>
                    </Input>
                    <Input>
                        <h3>아이디 입력해주세요.</h3>
                        <EmailInput type="text" value={id} placeholder='아이디를 입력하세요.'
                            onChange={ (e) => { setId(e.target.value) } }/>
                    </Input>

                    <Input className='p_r'>
                        <h3>비밀번호 입력해주세요.</h3>
                        <div className="p_r">
                        <EmailInput
                            type={pwType.pw.type}
                            value={pw}
                            placeholder='6-20자 영문,숫자 특수문자를 조합해서 입력해 주세요.'
                            onChange={(e) => { setPw(e.target.value) }}
                            required
                        />
                        <span onClick={handlePasswordTypePw} className='see_pw join'>
                            {pwType.pw.visible ? "비밀번호 숨기기" : "비밀번호 보기"}
                        </span>
                        </div>
                    </Input>
                    
                    <Input className='p_r'>
                        <h3>비밀번호 다시 입력해주세요.</h3>
                        <EmailInput value={pwchk} placeholder='입력하신 비밀번호와 동일하게 입력해 주세요.'
                            onChange={ (e) => {setPwChk(e.target.value)} }
                            type='password'
                            required/>
                        <p className="mt-5" style={{color:"#FF0000",fontSize:"12px"}}> 동일한 비밀번호를 입력해주세요. </p>
                    </Input>

                    <Input>
                        <h3>이메일을 입력해주세요.</h3>
                        <FlexSt>
                            <EmailInput type="text" value={email1}
                                onChange={ (e) => { setEmail1(e.target.value) } }/>
                            <p className='ml-5 mr-5'>@</p>
                            <EmailInput type="text" id="email" value={email2} />
                            <select id="domain-list" className='ml-10' onChange={(e) =>{setEmail2(e.target.value)} } >
                                <option value="type">직접입력</option>
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
                            <select id="phone-list" className='mr-10' onChange={(e) => {setPhone1(e.target.value)} } >
                                <option>010</option>
                                <option>011</option>
                                <option>016</option>
                            </select>
                            <EmailInput type="text" placeholder="‘-’ 없이 입력해주세요." maxLength={8}
                                onChange={(e) => {
                                    e.preventDefault();
                                    if (regex.test(e.target.value)) {
                                        setPhone2(e.target.value);
                                    } else {
                                        alert('숫자만 입력 부탁 드립니다.');
                                    }
                                }}
                            />
                            <button className='ml-10' onClick={(e)=>{
                                e.preventDefault();
                                alert("인증번호 발송");
                            }}>인증번호 발송</button>
                        </FlexSt>
                    </Input>

                    <Input>
                        <h3>인증번호를 입력해주세요.</h3>
                        <EmailInput type="text" placeholder='인증번호를 입력하세요.' onChange={onChange} value={text}/>
                    </Input>
                </div>
                <div className='f-center'>
                    <Link to={"/"} className='prevbt mr-10'>이전</Link>
                    <button onClick={(e)=>{
                        e.preventDefault();
                        dataSubmit();
                    }}>P:log 가입</button>
                </div>
            </Inner>
        </Wrap>

    )

}
