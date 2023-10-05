import React, { useState, createContext, useContext, Component, useEffect  } from 'react';
import axios from "axios";

export default function Testapi(){
    const [code, setCode] = useState('');
    const [msg, setMsg] = useState('');
    useEffect( () => {
        axios.get("https://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtNcst?serviceKey=LuzMRse%2BHSLpVAku6AHXRloynZXPkYnXBtQ295lZXRdwo5y%2FSJCRsQ7GErzxJTcTFUMMJRrFMOWPjyu7dcF0JQ%3D%3D&numOfRows=10&pageNo=1&base_date=20231004&dataType=JSON&base_time=0600&nx=55&ny=127",{
        })
        .then( (response) => {
            const jsonData = response.data;
            const returnval = jsonData['response']['header'];
            setCode(returnval['resultCode']);
            setMsg(returnval['resultMsg']);
        })
        .catch( (error) => {
            console.log(error);
        })
    }, []);

    return(
        <>
            <span>테스트 api 페이지 입니다.</span>
            <div style={{ border:"1px solid red"}}>
                <p>{code}</p>
                <p>{msg}</p>
            </div>
        </>
    )
}

