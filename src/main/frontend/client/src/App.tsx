import React, { useEffect, useState } from 'react';
import { Route, Routes, Link } from "react-router-dom";

import "./common/common.scss"
import "./main/Main.scss"

import Main from "./main/Main";
import Join from "./join/join";
import Login from "./join/login";

import Main_Header from "./components/Main_Header";
import Footer from "./components/Footer"

function App() {
  const [ message, setMessage ] = useState([]);

  useEffect(() => {
    fetch("/api/hello")
        .then(res => res.json())
        .then(data => setMessage(data));
  }, []);

  return (
      <div className="App">
          <div className="f-between">
            <div className='entire_left'></div>
            <div className='entire_right'>
              <Main_Header/>              
              <Routes>
                    <Route path="/" element={<Main/>} />
                    <Route path="/join" element={<Join />} />
                    <Route path="/login" element={<Login />} />
              </Routes>
              <Footer/>
            </div>
          </div>
      </div>
  );
}

export default App;
