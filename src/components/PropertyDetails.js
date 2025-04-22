import React, { useState } from 'react';
import './PropertyDetails.css';
import { FaBed, FaBath, FaCar, FaRulerCombined, FaCalendarAlt, FaChartLine, FaMapMarkerAlt } from 'react-icons/fa';

const PropertyDetails = ({ property, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!property) return null;

  return (
    <div className="property-details-overlay">
      <div className="property-details-card">
        <button className="close-button" onClick={onClose}>×</button>
        
        <div className="property-header" style={{ backgroundImage: `url(${property.imageUrl})` }}>
          <div className="property-header-overlay">
            <h2 className="property-title">{property.title}</h2>
            <div className="property-price">${property.price.toLocaleString()}</div>
            <div className="property-address">
              <FaMapMarkerAlt /> {property.address}
            </div>
          </div>
        </div>
        
        <div className="property-tabs">
          <button 
            className={`tab-button ${activeTab === 'overview' ? 'active' : ''}`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button 
            className={`tab-button ${activeTab === 'investment' ? 'active' : ''}`}
            onClick={() => setActiveTab('investment')}
          >
            Investment Analysis
          </button>
          <button 
            className={`tab-button ${activeTab === 'features' ? 'active' : ''}`}
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
          <button 
            className={`tab-button ${activeTab === 'location' ? 'active' : ''}`}
            onClick={() => setActiveTab('location')}
          >
            Location
          </button>
        </div>
        
        <div className="property-content">
          {activeTab === 'overview' && (
            <div className="tab-content">
              <div className="property-specs">
                <div className="spec-item">
                  <FaBed className="spec-icon" />
                  <div className="spec-value">{property.beds}</div>
                  <div className="spec-label">Bedrooms</div>
                </div>
                <div className="spec-item">
                  <FaBath className="spec-icon" />
                  <div className="spec-value">{property.baths}</div>
                  <div className="spec-label">Bathrooms</div>
                </div>
                <div className="spec-item">
                  <FaCar className="spec-icon" />
                  <div className="spec-value">{property.parking}</div>
                  <div className="spec-label">Parking</div>
                </div>
                <div className="spec-item">
                  <FaRulerCombined className="spec-icon" />
                  <div className="spec-value">{property.area}m²</div>
                  <div className="spec-label">Area</div>
                </div>
              </div>
              
              <div className="property-description">
                <h3>Property Description</h3>
                <p>{property.description}</p>
              </div>
              
              <div className="property-agent">
                <div className="agent-info">
                  <img src={property.agent.photo} alt={property.agent.name} className="agent-photo" />
                  <div className="agent-details">
                    <div className="agent-name">{property.agent.name}</div>
                    <div className="agent-company">{property.agent.company}</div>
                    <div className="agent-contact">{property.agent.phone}</div>
                  </div>
                </div>
                <div className="listing-date">
                  <FaCalendarAlt /> Listed {property.listedDate}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'investment' && (
            <div className="tab-content">
              <div className="investment-metrics">
                <div className="metric-card">
                  <div className="metric-title">Rental Yield</div>
                  <div className="metric-value">{property.rentalYield}%</div>
                  <div className="metric-description">Annual rental income as percentage of property value</div>
                </div>
                <div className="metric-card">
                  <div className="metric-title">Capital Growth</div>
                  <div className="metric-value">{property.capitalGrowth}%</div>
                  <div className="metric-description">Projected annual capital appreciation</div>
                </div>
                <div className="metric-card">
                  <div className="metric-title">Weekly Cashflow</div>
                  <div className="metric-value">${property.weeklyCashflow}</div>
                  <div className="metric-description">Estimated weekly rental income after expenses</div>
                </div>
              </div>
              
              <div className="investment-analysis">
                <h3>Investment Analysis</h3>
                <div className="analysis-row">
                  <div className="analysis-label">Purchase Price</div>
                  <div className="analysis-value">${property.price.toLocaleString()}</div>
                </div>
                <div className="analysis-row">
                  <div className="analysis-label">Estimated Weekly Rent</div>
                  <div className="analysis-value">${property.weeklyRent}</div>
                </div>
                <div className="analysis-row">
                  <div className="analysis-label">Annual Rental Income</div>
                  <div className="analysis-value">${(property.weeklyRent * 52).toLocaleString()}</div>
                </div>
                <div className="analysis-row">
                  <div className="analysis-label">Estimated Annual Expenses</div>
                  <div className="analysis-value">${property.annualExpenses.toLocaleString()}</div>
                </div>
                <div className="analysis-row">
                  <div className="analysis-label">Net Annual Income</div>
                  <div className="analysis-value">${((property.weeklyRent * 52) - property.annualExpenses).toLocaleString()}</div>
                </div>
                <div className="analysis-row total">
                  <div className="analysis-label">Return on Investment</div>
                  <div className="analysis-value">{(((property.weeklyRent * 52) - property.annualExpenses) / property.price * 100).toFixed(2)}%</div>
                </div>
              </div>
              
              <div className="market-comparison">
                <h3>Market Comparison</h3>
                <div className="comparison-chart">
                  <div className="chart-bar-container">
                    <div className="chart-label">This Property</div>
                    <div className="chart-bar" style={{ width: `${property.rentalYield * 10}%` }}>
                      <span className="chart-value">{property.rentalYield}%</span>
                    </div>
                  </div>
                  <div className="chart-bar-container">
                    <div className="chart-label">Suburb Average</div>
                    <div className="chart-bar" style={{ width: `${property.suburbAvgYield * 10}%` }}>
                      <span className="chart-value">{property.suburbAvgYield}%</span>
                    </div>
                  </div>
                  <div className="chart-bar-container">
                    <div className="chart-label">City Average</div>
                    <div className="chart-bar" style={{ width: `${property.cityAvgYield * 10}%` }}>
                      <span className="chart-value">{property.cityAvgYield}%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'features' && (
            <div className="tab-content">
              <div className="property-features">
                <h3>Property Features</h3>
                <ul className="features-list">
                  {property.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <span className="feature-icon">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="property-images">
                <h3>Property Images</h3>
                <div className="image-gallery">
                  {property.images.map((image, index) => (
                    <div key={index} className="gallery-image" style={{ backgroundImage: `url(${image})` }}></div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'location' && (
            <div className="tab-content">
              <div className="location-map">
                <h3>Location</h3>
                <div className="map-placeholder">
                  <div className="map-overlay">
                    <div className="map-pin"></div>
                    <div className="map-address">{property.address}</div>
                  </div>
                </div>
              </div>
              
              <div className="location-amenities">
                <h3>Nearby Amenities</h3>
                <div className="amenities-grid">
                  {property.amenities.map((amenity, index) => (
                    <div key={index} className="amenity-item">
                      <div className="amenity-icon">{amenity.icon}</div>
                      <div className="amenity-details">
                        <div className="amenity-name">{amenity.name}</div>
                        <div className="amenity-distance">{amenity.distance}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="suburb-stats">
                <h3>Suburb Statistics</h3>
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-label">Median House Price</div>
                    <div className="stat-value">${property.suburbStats.medianPrice.toLocaleString()}</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-label">Annual Growth</div>
                    <div className="stat-value">{property.suburbStats.annualGrowth}%</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-label">Rental Yield</div>
                    <div className="stat-value">{property.suburbStats.rentalYield}%</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-label">Vacancy Rate</div>
                    <div className="stat-value">{property.suburbStats.vacancyRate}%</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        
        <div className="property-actions">
          <button className="action-button primary">Contact Agent</button>
          <button className="action-button secondary">Schedule Inspection</button>
          <button className="action-button tertiary">Save Property</button>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
