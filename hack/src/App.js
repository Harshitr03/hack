import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import './App.css';
import Main from './pages/main'
import Home from './pages/home';
import Login from './pages/login';
import Navbar from './components/navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/main" element={<Main/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;