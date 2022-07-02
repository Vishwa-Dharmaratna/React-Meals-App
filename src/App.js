import React from 'react'
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './components/Homepage/HomePage';
import Categories from './components/Categories/Categories';
import RandomMeal from './components/RandomMeal/RandomMeal';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/categories" element={<Categories/>} />
        <Route path="/random" element={<RandomMeal/>} />   
      </Routes>
      <Footer/>
      </Router>
     
    </div>
  );
}

export default App;
