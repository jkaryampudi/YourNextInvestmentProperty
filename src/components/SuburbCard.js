import React from 'react';
import './SuburbCard.css';

const SuburbCard = ({ suburb }) => {
  const formatCurrency = (value) => {
    return value.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' })
      .replace(/\.00$/, '');
  };

  const renderTrendIndicator = (isUp) => {
    return isUp ? (
      <span className="trend-up">↑</span>
    ) : (
      <span className="trend-stable">→</span>
    );
  };

  return (
    <div className="suburb-card">
      <h3 className="suburb-name">{suburb.name}</h3>
      <p className="suburb-location">{suburb.postcode}, {suburb.region}</p>
      
      <div className="investment-score">
        <span className="label">Investment Potential:</span>
        <span className={`score score-${Math.floor(suburb.investmentPotential)}`}>
          {suburb.investmentPotential}/10
        </span>
      </div>
      
      <div className="price-section">
        <div className="price-column">
          <p className="price-label">Median House Price</p>
          <p className="price-value">
            {formatCurrency(suburb.medianHousePrice)} {renderTrendIndicator(true)}
          </p>
        </div>
        <div className="price-column">
          <p className="price-label">Median Unit Price</p>
          <p className="price-value">
            {formatCurrency(suburb.medianUnitPrice)} {renderTrendIndicator(true)}
          </p>
        </div>
      </div>
      
      <div className="metrics-section">
        <div className="metrics-column">
          <p className="metrics-label">Gross Rental Yield</p>
          <p className="metrics-value">
            {suburb.grossRentalYield}% {renderTrendIndicator(false)}
          </p>
        </div>
        <div className="metrics-column">
          <p className="metrics-label">Vacancy Rate</p>
          <p className="metrics-value">
            {suburb.vacancyRate}% {renderTrendIndicator(true)}
          </p>
        </div>
      </div>
      
      <div className="chart-placeholder">
        <p>Price Trend Chart (5 Years)</p>
      </div>
    </div>
  );
};

export default SuburbCard;
