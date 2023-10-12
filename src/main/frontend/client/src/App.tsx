import React, { useEffect, useState } from 'react';
import { Route, Routes, Link} from "react-router-dom";
import EntireRight from "./components/EntireRight";
import EntireLeft from "./components/EntireLeft";
import "./scss/default.scss";
import "./scss/common.scss";


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
            <EntireLeft></EntireLeft>
             <EntireRight></EntireRight>
          </div>
      </div>
  );
}

export default App;
