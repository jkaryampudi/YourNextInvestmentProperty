import React, { useState } from 'react';
import SuburbCard from './SuburbCard';
import MarketData from './MarketData';
import PropertyDetails from './PropertyDetails';
import suburbData from '../data/suburbData';
import propertyData from '../data/propertyData';
import './SuburbList.css';

const SuburbList = ({ onViewProfile }) => {
  const [selectedProperty, setSelectedProperty] = useState(null);
  
  const handleViewPropertyDetails = (propertyId) => {
    const property = propertyData.find(p => p.id === propertyId);
    setSelectedProperty(property);
  };
  
  const handleClosePropertyDetails = () => {
    setSelectedProperty(null);
  };
  
  return (
    <div className="suburb-list-container">
      <h2 className="section-title">High-Potential Suburbs</h2>
      
      <div className="suburb-grid">
        {suburbData.map(suburb => (
          <div key={suburb.id} className="suburb-card-wrapper">
            <SuburbCard suburb={suburb} onViewProfile={() => onViewProfile(suburb.id)} />
          </div>
        ))}
      </div>
      
      {/* Property listings section */}
      <h2 className="section-title">Featured Properties</h2>
      <div className="property-grid">
        {propertyData.map(property => (
          <div key={property.id} className="property-card">
            <div className="property-image" style={{ backgroundImage: `url(${property.imageUrl || '/images/property-placeholder.jpg'})` }}>
              <div className="property-price">${property.price.toLocaleString()}</div>
            </div>
            <div className="property-content">
              <h3 className="property-title">{property.title}</h3>
              <p className="property-address">{property.address}</p>
              <div className="property-specs">
                <span className="spec"><i className="fa fa-bed"></i> {property.beds} beds</span>
                <span className="spec"><i className="fa fa-bath"></i> {property.baths} baths</span>
                <span className="spec"><i className="fa fa-car"></i> {property.parking} parking</span>
              </div>
              <div className="property-metrics">
                <div className="metric">
                  <span className="metric-label">Rental Yield</span>
                  <span className="metric-value">{property.rentalYield}%</span>
                </div>
                <div className="metric">
                  <span className="metric-label">Capital Growth</span>
                  <span className="metric-value">{property.capitalGrowth}%</span>
                </div>
              </div>
              <button 
                className="view-details-btn" 
                onClick={() => handleViewPropertyDetails(property.id)}
              >
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      
      {selectedProperty && (
        <PropertyDetails 
          property={selectedProperty} 
          onClose={handleClosePropertyDetails} 
        />
      )}
      
      <MarketData />
    </div>
  );
};

export default SuburbList;
