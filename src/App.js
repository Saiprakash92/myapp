import React, { useState} from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home';
import LoginSignup from './components/LoginSignup';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<LoginSignup/>}/>
          <Route path="/home" element={<Home/>}/>
        </Routes>
      </Router>
      
      
    </div>
  );
}

export default App;
