import './Mypage.css';

function Mypage() {
  return (
    <div className="Mypage">
      <div className='logo'></div>
      <div className='profile'>
        <div className='profileImg'></div>
        <p className='profileName'>홍길동</p>
      </div>
      <div className='Menu'>
        <ul>
          <li><a href="#;">캘린더</a></li>
          <li><a href="#;">마이로그</a></li>
          <li><a href="#;">잇로그</a></li>
          <li><a href="#;">산책로그</a></li>
          <li><a href="#;">플로그:인</a></li>
        </ul>
      </div>
      <div className='btMenu'>
        <a>정보변경</a>
        <a>로그아웃</a>
      </div>
    </div>
  );
}

export default Mypage;
