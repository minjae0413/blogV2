import react from "react";

// npm install passport-naver-v2

export default function Naver() {
    const NAVER_CLIENT_ID = ""; // 발급받은 클라이언트 아이디
    const REDIRECT_URI = "http://localhost:3000/"; //Callback url
    const STATE = "false"; //
    const NAVER_AUTH_URL = "";

    const NaverLogin = () => {
        window.location.href = NAVER_AUTH_URL;
    };

    return <button onClick={NaverLogin}>네이버 로그인</button>;
}