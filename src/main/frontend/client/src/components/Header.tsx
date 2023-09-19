import {useState, useEffect} from "react";

const Header:any= () =>{
 return(
     <div className="header">
         <h1>P:LOG</h1>
         <div className="tit">
             <div>
                 <div className="userName">홍길동님</div>
                 <p>
                     오늘의 로그는 무엇인가요?
                 </p>
             </div>
             <div className="profile">
                 <img src="" alt="" />
             </div>
         </div>
     </div>
 )
}

export default Header;
