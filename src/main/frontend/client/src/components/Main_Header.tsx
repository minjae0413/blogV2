import {useState, useEffect} from "react";
import { Link } from "react-router-dom";

const Main_Header:any= () =>{
return(
        <div className="header">
            <h1>P:LOG</h1>
            <div className="tit">
                <div>
                    <Link to={"/mypage"} className="userName">홍길동님</Link>
                    <p>
                        오늘의 로그는 무엇인가요?
                    </p>
                </div>
                <div className="profile">
                    <img src="" alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Main_Header;
