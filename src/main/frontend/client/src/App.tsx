import React, { useEffect, useState } from 'react';
import { Route, Routes, Link } from "react-router-dom";

import "./common/common.scss"
import "./main/Main.css"

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
          <Main_Header/>
            <Main/>
            <Footer/>
            <Routes>
                  <Route path="/join" element={<Join />} />
                  <Route path="/login" element={<Login />} />
            </Routes>
      </div>
  );
}

export default App;