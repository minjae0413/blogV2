import React, { useEffect, useState } from 'react';

import { Route, Routes } from "react-router-dom";
import Join from "./join/join";
import Login from "./join/login";

function App() {
  const [ message, setMessage ] = useState([]);

  useEffect(() => {
    fetch("/api/hello")
        .then(res => res.json())
        .then(data => setMessage(data));
  }, []);

  return (
      <div className="App">
            <Routes>
                  <Route path="/join" element={<Join />} />
                  <Route path="/login" element={<Login />} />
            </Routes>
      </div>
  );
}

export default App;