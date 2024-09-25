import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import Hero from './components/home';
import Footer from './components/footer';
import Story from './components/story';
import Main from './components/main'
function App() {
  return (
    <div className="App">
      {/* <Navbar />
      <Hero /> */}
      <Main/>
      {/* <Story/>
      <Footer /> */}

    </div>
  );
}

export default App;
