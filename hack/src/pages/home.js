import React from 'react';
import '../App.css';
import Hero from '.././components/home';
import Footer from '.././components/footer';
import Story from '.././components/story';
function Home() {
  return (
    <div className="App">
      <Hero /> 
      <Story/>
      <Footer />
    </div>
  );
}

export default Home;
