import React from "react";
import Home from "./Components/Home";
import WebEditor from "./Components/WebEditor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/"  element={<Home/>} />
        <Route path="/web" element={<WebEditor/>}/>
      </Routes>
    </Router>
  );
}

export default App;
