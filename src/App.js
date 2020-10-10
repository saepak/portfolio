import React from 'react';
import './App.css';
import Nav from './components/layout/Nav'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

const App = () => {
  return (
    <div className="App">
        <Header />
        <Nav />
        <Footer />
    </div>
  );
}

export default App;
