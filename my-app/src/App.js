import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Main from "./pages/Main";
import Cards from './components/Cards';
import Footer from './components/Footer'


function App() {
  return (
      <div>
        <Navbar />
        <Main />
        <Cards />
        <Footer />
      </div>
  );
}

export default App;
