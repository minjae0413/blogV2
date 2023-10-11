import React, { useEffect, useState } from 'react';
import { Route, Routes, Link} from "react-router-dom";

import "./scss/common.scss";
import "./scss/default.scss";


import Main from "./main/Main";
import Join from "./join/join";
import Login from "./join/login";
import Mypage from "./mypage/mypage";
import Testapi from "./testapi/Testapi";
import FindID from "./join/findID";
import FindPW from "./join/findPW";


import Main_Header from "./components/Main_Header";
import Footer from "./components/Footer"
import BoardEditor from "./components/board/BoardEditor";
import WeatherMain from "./components/weather/WeatherMain";

import mainLogo from "./img/logo.png";
import icon01 from "./img/icon01.png";
import icon02 from "./img/icon02.png";
import icon03 from "./img/icon03.png";
import icon04 from "./img/icon04.png";


function App() {
  const [ message, setMessage ] = useState([]);

  useEffect(() => {
    fetch("/api/hello")
        .then(res => res.json())
        .then(data => setMessage(data));
  }, []);
  
  return (
      <div className="App">
          <div className="flex-box">
              <div className='entire_left'>
                <img src={mainLogo} alt="플로그 로고" />
              </div>
              <div className='entire_right'>
                <Routes>
                    <Route path="/" element={
                      <>
                        <Main_Header/>
                        <Main/>
                        <Footer/>
                      </>
                      } />
                    <Route path="/join" element={<Join />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/mypage" element={<Mypage />} />
                    <Route path="/findID" element={<FindID />} />
                    <Route path="/findPW" element={<FindPW />} />
                    <Route path="/testapi" element={<Testapi />} />
                    <Route path="/writeForm" element={
                      <>
                        <Main_Header/>
                        <BoardEditor />
                        <Footer/>
                      </>
                    } />
                    <Route path="/Weather" element={
                      <>
                        <Main_Header/>
                        <WeatherMain/>
                        <Footer/>
                      </>
                    } />
                </Routes>

              </div>
          </div>
      </div>
  );
}

export default App;
