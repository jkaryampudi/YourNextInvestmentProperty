import React from 'react';
import SuburbCard from './SuburbCard';
import MarketData from './MarketData';
import suburbData from '../data/suburbData';
import './SuburbList.css';

const SuburbList = ({ onViewProfile }) => {
  return (
    <div className="suburb-list-container">
      <h2 className="section-title">High-Potential Suburbs</h2>
      
      <div className="suburb-grid">
        {suburbData.map(suburb => (
          <div key={suburb.id} className="suburb-card-wrapper">
            <SuburbCard suburb={suburb} />
            <button 
              className="view-profile-btn" 
              onClick={() => onViewProfile(suburb.id)}
            >
              View Suburb Profile
            </button>
          </div>
        ))}
      </div>
      
      <MarketData />
    </div>
  );
};

export default SuburbList;
