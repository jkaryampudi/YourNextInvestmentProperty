import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import FilterSection from './components/FilterSection';
import SuburbList from './components/SuburbList';
import SuburbProfile from './components/SuburbProfile';
import Footer from './components/Footer';
import suburbData from './data/suburbData';

function App() {
  const [selectedSuburb, setSelectedSuburb] = useState(null);
  
  const handleViewProfile = (suburbId) => {
    const suburb = suburbData.find(s => s.id === suburbId);
    setSelectedSuburb(suburb);
    window.scrollTo(0, 0);
  };
  
  const handleCloseProfile = () => {
    setSelectedSuburb(null);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <FilterSection />
              {selectedSuburb && (
                <div className="container">
                  <SuburbProfile suburb={selectedSuburb} onClose={handleCloseProfile} />
                </div>
              )}
              <div className="container">
                <SuburbList onViewProfile={handleViewProfile} />
              </div>
            </>
          } />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
