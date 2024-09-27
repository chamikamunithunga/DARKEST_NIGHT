import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutBat from './components/AboutBat'; 
import DarkKnight from './components/DarkKnight';
import Movies from './components/Movies';
import News from './components/News';
import './App.css'; 

const AboutUs = () => <h1>About Us Page</h1>;
const Chamika = () => <h1>fdfdf</h1>;
const Roadmap = () => <h1>Roadmap Page</h1>;
const FAQ = () => <h1>FAQ Page</h1>;

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutBat" element={<AboutBat />} /> {/* Add AboutBat route */}
          <Route path="/darkknight" element={<DarkKnight />} />
          <Route path="/Movies" element={<Movies />} />
          <Route path="/News" element={<News />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
