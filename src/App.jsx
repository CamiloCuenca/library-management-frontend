import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// View
import { Login } from './view/Login';
import { Home } from './view/Home';
import {Signup} from './view/Signup'

export function App() {
  return (
    
    <Router>
      <Routes>
        <Route  path="/login" element={<Login />} />
        
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Login />} />
        <Route  path="/Signup" element={<Signup />} />

      </Routes>
    </Router>
  );
}
