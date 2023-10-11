import '../scss/Mypage.scss';
import { Link } from "react-router-dom";
import logoBlue from "../img/logo_blue.png";
import icon05 from "../img/icon05.png";

const Mypage =()=>{
  return (
    <section className="Mypage">
      <div className='logo'>
        <img src={logoBlue} alt="로고"/>
        <h2>P:LOG</h2>
      </div>
      <div className='profile'>
        <div className='profileImg'>
          <img src={icon05} alt="프로필 이미지"/>
        </div>
        <p className='profileName'>홍길동</p>
      </div>
        <ul>
          <li><a href="#;">캘린더</a></li>
          <li><a href="#;">마이로그</a></li>
          <li><a href="#;">잇로그</a></li>
          <li><a href="#;">산책로그</a></li>
          <li><a href="#;">플로그:인</a></li>
        </ul>
      <div className='btMenu'>
        <a>정보변경</a>
        <Link to='/login'>로그아웃</Link>
      </div>
    </section>
  );
}

export default Mypage;