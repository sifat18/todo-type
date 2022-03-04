import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Home from './components/Home';
import MainBody from './components/MainBody';

function App() {
  return (
    <div className="App">
      <Home />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
