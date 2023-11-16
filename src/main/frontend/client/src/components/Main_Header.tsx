import {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import icon01 from "../img/icon01.png";
import icon02 from "../img/icon02.png";
import icon03 from "../img/icon03.png";
import icon04 from "../img/icon04.png";
import axios from "axios";

const Main_Header:any= () =>{
    const [userId, setUserId] = useState('홍길동');

    const fetchSessionInfo = () => {
        axios.get('http://localhost:9090/api/member/sessionInfo')
            .then( response => {
                console.log(response);
                //setUserId(response);
            })
            .catch( error => {
                console.log(error);
            });
    }

    useEffect(() => {
        fetchSessionInfo();
      }, []);
return(
        <div className="Header Wrap">
            <h1><Link to={"/"}>P:LOG</Link></h1>
            <div className="tit">
                <div>
                    <Link to={"/mypage"} className="userName">{userId}님</Link>
                    <p>
                        오늘의 로그는 무엇인가요?
                    </p>
                </div>
                <div className="profile">
                    <Link to={"/mypage"} ><img src={icon03} alt="프로필 이미지"/></Link>
                </div>
            </div>
        </div>
    )
}

export default Main_Header;
