import React, { useEffect, useState } from 'react';
import { Route, Routes, Link } from "react-router-dom";

import "./common/common.scss";
import "./main/Main.scss";
import "./scss/Board.scss";

import Main from "./main/Main";
import Join from "./join/join";
import Login from "./join/login";
import Mypage from "./mypage/mypage";


import Main_Header from "./components/Main_Header";
import Footer from "./components/Footer"
import BoardEditor from "./components/board/BoardEditor";

function App() {
  const [ message, setMessage ] = useState([]);

  useEffect(() => {
    fetch("/api/hello")
        .then(res => res.json())
        .then(data => setMessage(data));
  }, []);

  return (
      <div className="App">
          <div className="f-center">
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
                </Routes>
              </div>
          </div>
      </div>
  );
}

export default App;
