import React from 'react';
import './App.css';
import AnimatedCircle from './components/circle';
import Camera from './components/camera'
function App() {
  return (
    <div className="App">
      <Camera/>
      <AnimatedCircle />
    </div>
  );
}

export default App;
