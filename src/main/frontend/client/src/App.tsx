import React, { useEffect, useState } from 'react';
import { Route, Routes, Link} from "react-router-dom";

import "./scss/common.scss";
import "./scss/default.scss";


import Main from "./main/Main";
import Join from "./join/join";
import Login from "./join/login";
import Mypage from "./mypage/mypage";


import Main_Header from "./components/Main_Header";
import Footer from "./components/Footer"
import BoardEditor from "./components/board/BoardEditor";
import WeatherMain from "./components/weather/WeatherMain";

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
              <div className='entire_left'></div>
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
