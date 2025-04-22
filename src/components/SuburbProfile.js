import React, { useState, useEffect } from 'react';
import './SuburbProfile.css';
import { FaInfoCircle, FaHome, FaChartBar, FaMapMarkedAlt, FaBed, FaBath, FaCar, FaRulerCombined, FaMapMarkerAlt, FaHeart, FaRegHeart } from 'react-icons/fa';

// Mock data for charts
const priceHistoryData = {
  years: ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'],
  houses: [750000, 800000, 830000, 860000, 900000, 930000, 960000, 990000, 1020000, 1050000],
  units: [450000, 480000, 510000, 540000, 570000, 600000, 630000, 650000, 680000, 700000]
};

const rentalYieldData = {
  years: ['2020', '2021', '2022', '2023', '2024'],
  houses: [3.5, 3.6, 3.7, 3.8, 3.9],
  units: [4.0, 4.1, 4.2, 4.3, 4.4]
};

const vacancyRateData = {
  months: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  suburb: [1.3, 1.2, 1.1, 1.0, 1.0, 1.0, 1.1, 1.2, 1.3, 1.2, 1.1, 1.0],
  regional: [2.1, 2.0, 1.9, 1.8, 1.7, 1.7, 1.8, 1.9, 2.1, 2.0, 1.9, 1.9]
};

const investmentMetricsData = {
  metrics: ['Capital Growth', 'Rental Yield', 'Affordability', 'Infrastructure', 'Amenities', 'Transport'],
  suburb: [8, 6, 7, 8, 7, 5],
  regional: [6, 5, 5, 6, 6, 7]
};

const SuburbProfile = ({ suburb, onClose }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [savedProperties, setSavedProperties] = useState([]);
  
  const formatCurrency = (value) => {
    return value.toLocaleString('en-AU', { style: 'currency', currency: 'AUD' })
      .replace(/\.00$/, '');
  };

  const toggleSaveProperty = (propertyId) => {
    if (savedProperties.includes(propertyId)) {
      setSavedProperties(savedProperties.filter(id => id !== propertyId));
    } else {
      setSavedProperties([...savedProperties, propertyId]);
    }
  };

  // Draw charts when Market Data tab is active
  useEffect(() => {
    if (activeTab === 'market') {
      drawPriceHistoryChart();
      drawRentalYieldChart();
      drawVacancyRateChart();
      drawInvestmentMetricsChart();
    }
  }, [activeTab]);

  const drawPriceHistoryChart = () => {
    const canvas = document.getElementById('priceHistoryChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw axes
    ctx.beginPath();
    ctx.moveTo(50, 30);
    ctx.lineTo(50, height - 30);
    ctx.lineTo(width - 30, height - 30);
    ctx.strokeStyle = '#e0e0e0';
    ctx.stroke();
    
    // Draw house price line
    const housePoints = priceHistoryData.houses.map((price, index) => {
      const x = 50 + (index * (width - 80) / (priceHistoryData.years.length - 1));
      const y = height - 30 - ((price - 400000) / 700000 * (height - 60));
      return { x, y };
    });
    
    ctx.beginPath();
    ctx.moveTo(housePoints[0].x, housePoints[0].y);
    housePoints.forEach(point => ctx.lineTo(point.x, point.y));
    ctx.strokeStyle = '#3498db';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Fill house price area
    ctx.beginPath();
    ctx.moveTo(housePoints[0].x, housePoints[0].y);
    housePoints.forEach(point => ctx.lineTo(point.x, point.y));
    ctx.lineTo(housePoints[housePoints.length - 1].x, height - 30);
    ctx.lineTo(housePoints[0].x, height - 30);
    ctx.fillStyle = 'rgba(52, 152, 219, 0.1)';
    ctx.fill();
    
    // Draw unit price line
    const unitPoints = priceHistoryData.units.map((price, index) => {
      const x = 50 + (index * (width - 80) / (priceHistoryData.years.length - 1));
      const y = height - 30 - ((price - 400000) / 700000 * (height - 60));
      return { x, y };
    });
    
    ctx.beginPath();
    ctx.moveTo(unitPoints[0].x, unitPoints[0].y);
    unitPoints.forEach(point => ctx.lineTo(point.x, point.y));
    ctx.strokeStyle = '#e74c3c';
    ctx.lineWidth = 3;
    ctx.stroke();
    
    // Fill unit price area
    ctx.beginPath();
    ctx.moveTo(unitPoints[0].x, unitPoints[0].y);
    unitPoints.forEach(point => ctx.lineTo(point.x, point.y));
    ctx.lineTo(unitPoints[unitPoints.length - 1].x, height - 30);
    ctx.lineTo(unitPoints[0].x, height - 30);
    ctx.fillStyle = 'rgba(231, 76, 60, 0.1)';
    ctx.fill();
    
    // Draw year labels
    ctx.fillStyle = '#7f8c8d';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    priceHistoryData.years.forEach((year, index) => {
      const x = 50 + (index * (width - 80) / (priceHistoryData.years.length - 1));
      ctx.fillText(year, x, height - 10);
    });
    
    // Draw price labels
    ctx.textAlign = 'right';
    const priceLabels = ['$400,000', '$600,000', '$800,000', '$1,000,000', '$1,100,000'];
    priceLabels.forEach((label, index) => {
      const y = height - 30 - (index * (height - 60) / (priceLabels.length - 1));
      ctx.fillText(label, 45, y + 5);
    });
  };

  const drawRentalYieldChart = () => {
    const canvas = document.getElementById('rentalYieldChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw axes
    ctx.beginPath();
    ctx.moveTo(50, 30);
    ctx.lineTo(50, height - 30);
    ctx.lineTo(width - 30, height - 30);
    ctx.strokeStyle = '#e0e0e0';
    ctx.stroke();
    
    const barWidth = 30;
    const groupWidth = (width - 80) / rentalYieldData.years.length;
    
    // Draw bars
    rentalYieldData.years.forEach((year, index) => {
      const x = 50 + (index * groupWidth) + (groupWidth / 2) - barWidth;
      
      // House bar
      const houseHeight = (rentalYieldData.houses[index] / 5) * (height - 60);
      ctx.fillStyle = '#2ecc71';
      ctx.fillRect(x - 5, height - 30 - houseHeight, barWidth, houseHeight);
      
      // Unit bar
      const unitHeight = (rentalYieldData.units[index] / 5) * (height - 60);
      ctx.fillStyle = '#f39c12';
      ctx.fillRect(x + barWidth, height - 30 - unitHeight, barWidth, unitHeight);
    });
    
    // Draw year labels
    ctx.fillStyle = '#7f8c8d';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    rentalYieldData.years.forEach((year, index) => {
      const x = 50 + (index * groupWidth) + (groupWidth / 2);
      ctx.fillText(year, x, height - 10);
    });
    
    // Draw yield labels
    ctx.textAlign = 'right';
    const yieldLabels = ['0%', '1%', '2%', '3%', '4%', '4.5%'];
    yieldLabels.forEach((label, index) => {
      const y = height - 30 - (index * (height - 60) / (yieldLabels.length - 1));
      ctx.fillText(label, 45, y + 5);
    });
  };

  const drawVacancyRateChart = () => {
    const canvas = document.getElementById('vacancyRateChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw axes
    ctx.beginPath();
    ctx.moveTo(50, 30);
    ctx.lineTo(50, height - 30);
    ctx.lineTo(width - 30, height - 30);
    ctx.strokeStyle = '#e0e0e0';
    ctx.stroke();
    
    // Draw suburb vacancy rate line
    const suburbPoints = vacancyRateData.suburb.map((rate, index) => {
      const x = 50 + (index * (width - 80) / (vacancyRateData.months.length - 1));
      const y = height - 30 - (rate / 2.5 * (height - 60));
      return { x, y };
    });
    
    ctx.beginPath();
    ctx.moveTo(suburbPoints[0].x, suburbPoints[0].y);
    suburbPoints.forEach(point => ctx.lineTo(point.x, point.y));
    ctx.strokeStyle = '#2ecc71';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Fill suburb area
    ctx.beginPath();
    ctx.moveTo(suburbPoints[0].x, suburbPoints[0].y);
    suburbPoints.forEach(point => ctx.lineTo(point.x, point.y));
    ctx.lineTo(suburbPoints[suburbPoints.length - 1].x, height - 30);
    ctx.lineTo(suburbPoints[0].x, height - 30);
    ctx.fillStyle = 'rgba(46, 204, 113, 0.1)';
    ctx.fill();
    
    // Draw regional vacancy rate line
    const regionalPoints = vacancyRateData.regional.map((rate, index) => {
      const x = 50 + (index * (width - 80) / (vacancyRateData.months.length - 1));
      const y = height - 30 - (rate / 2.5 * (height - 60));
      return { x, y };
    });
    
    ctx.beginPath();
    ctx.moveTo(regionalPoints[0].x, regionalPoints[0].y);
    regionalPoints.forEach(point => ctx.lineTo(point.x, point.y));
    ctx.strokeStyle = '#f39c12';
    ctx.lineWidth = 2;
    ctx.stroke();
    
    // Fill regional area
    ctx.beginPath();
    ctx.moveTo(regionalPoints[0].x, regionalPoints[0].y);
    regionalPoints.forEach(point => ctx.lineTo(point.x, point.y));
    ctx.lineTo(regionalPoints[regionalPoints.length - 1].x, height - 30);
    ctx.lineTo(regionalPoints[0].x, height - 30);
    ctx.fillStyle = 'rgba(243, 156, 18, 0.1)';
    ctx.fill();
    
    // Draw month labels
    ctx.fillStyle = '#7f8c8d';
    ctx.font = '12px Arial';
    ctx.textAlign = 'center';
    vacancyRateData.months.forEach((month, index) => {
      if (index % 2 === 0) { // Show every other month to avoid crowding
        const x = 50 + (index * (width - 80) / (vacancyRateData.months.length - 1));
        ctx.fillText(month, x, height - 10);
      }
    });
    
    // Draw rate labels
    ctx.textAlign = 'right';
    const rateLabels = ['0%', '0.5%', '1%', '1.5%', '2%', '2.5%'];
    rateLabels.forEach((label, index) => {
      const y = height - 30 - (index * (height - 60) / (rateLabels.length - 1));
      ctx.fillText(label, 45, y + 5);
    });
  };

  const drawInvestmentMetricsChart = () => {
    const canvas = document.getElementById('investmentMetricsChart');
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    const centerX = width / 2;
    const centerY = height / 2;
    const radius = Math.min(width, height) / 2 - 40;
    
    // Draw radar grid
    const sides = investmentMetricsData.metrics.length;
    const angleStep = (Math.PI * 2) / sides;
    
    // Draw concentric circles
    const levels = 5;
    for (let level = 1; level <= levels; level++) {
      const levelRadius = (radius * level) / levels;
      
      ctx.beginPath();
      for (let i = 0; i <= sides; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const x = centerX + levelRadius * Math.cos(angle);
        const y = centerY + levelRadius * Math.sin(angle);
        
        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.strokeStyle = '#e0e0e0';
      ctx.stroke();
    }
    
    // Draw axes
    for (let i = 0; i < sides; i++) {
      const angle = i * angleStep - Math.PI / 2;
      const x = centerX + radius * Math.cos(angle);
      const y = centerY + radius * Math.sin(angle);
      
      ctx.beginPath();
      ctx.moveTo(centerX, centerY);
      ctx.lineTo(x, y);
      ctx.strokeStyle = '#e0e0e0';
      ctx.stroke();
      
      // Draw labels
      const labelX = centerX + (radius + 20) * Math.cos(angle);
      const labelY = centerY + (radius + 20) * Math.sin(angle);
      
      ctx.fillStyle = '#7f8c8d';
      ctx.font = '12px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(investmentMetricsData.metrics[i], labelX, labelY);
    }
    
    // Draw suburb data
    const suburbPoints = investmentMetricsData.suburb.map((value, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const scaledValue = value / 10;
      const x = centerX + radius * scaledValue * Math.cos(angle);
      const y = centerY + radius * scaledValue * Math.sin(angle);
      return { x, y };
    });
    
    ctx.beginPath();
    ctx.moveTo(suburbPoints[0].x, suburbPoints[0].y);
    suburbPoints.forEach(point => ctx.lineTo(point.x, point.y));
    ctx.lineTo(suburbPoints[0].x, suburbPoints[0].y);
    ctx.strokeStyle = '#3498db';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = 'rgba(52, 152, 219, 0.2)';
    ctx.fill();
    
    // Draw regional data
    const regionalPoints = investmentMetricsData.regional.map((value, index) => {
      const angle = index * angleStep - Math.PI / 2;
      const scaledValue = value / 10;
      const x = centerX + radius * scaledValue * Math.cos(angle);
      const y = centerY + radius * scaledValue * Math.sin(angle);
      return { x, y };
    });
    
    ctx.beginPath();
    ctx.moveTo(regionalPoints[0].x, regionalPoints[0].y);
    regionalPoints.forEach(point => ctx.lineTo(point.x, point.y));
    ctx.lineTo(regionalPoints[0].x, regionalPoints[0].y);
    ctx.strokeStyle = '#e74c3c';
    ctx.lineWidth = 2;
    ctx.stroke();
    ctx.fillStyle = 'rgba(231, 76, 60, 0.2)';
    ctx.fill();
  };

  return (
    <div className="suburb-profile-container">
      <div className="profile-header-gradient">
        <div className="profile-header-content">
          <h1 className="suburb-title">{suburb.name}</h1>
          <p className="suburb-subtitle">{suburb.postcode}, {suburb.region}, NSW</p>
          
          <div className="key-metrics-container">
            <div className="key-metric">
              <h2>{formatCurrency(suburb.medianHousePrice)}</h2>
              <p>Median House Price</p>
            </div>
            <div className="key-metric">
              <h2>{suburb.grossRentalYield}%</h2>
              <p>Gross Rental Yield</p>
            </div>
            <div className="key-metric">
              <h2>{suburb.capitalGrowth}%</h2>
              <p>5yr Capital Growth</p>
            </div>
            <div className="key-metric">
              <h2>{suburb.investmentPotential}/10</h2>
              <p>Investment Score</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="profile-tabs">
        <button 
          className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
          onClick={() => setActiveTab('overview')}
        >
          <FaInfoCircle /> Overview
        </button>
        <button 
          className={`tab-btn ${activeTab === 'properties' ? 'active' : ''}`}
          onClick={() => setActiveTab('properties')}
        >
          <FaHome /> Properties
        </button>
        <button 
          className={`tab-btn ${activeTab === 'market' ? 'active' : ''}`}
          onClick={() => setActiveTab('market')}
        >
          <FaChartBar /> Market Data
        </button>
        <button 
          className={`tab-btn ${activeTab === 'map' ? 'active' : ''}`}
          onClick={() => setActiveTab('map')}
        >
          <FaMapMarkedAlt /> Map
        </button>
      </div>
      
      <div className="tab-content">
        {activeTab === 'overview' && (
          <div className="overview-tab">
            <p className="suburb-description">
              {suburb.name} is a growing suburb in Sydney's {suburb.region} region, offering a balance of affordability and growth potential. 
              With strong infrastructure development and proximity to the future Western Sydney Airport, it presents an attractive opportunity 
              for investors looking for capital growth in the medium to long term.
            </p>
            
            <div className="overview-grid">
              <div className="overview-section">
                <h3>Key Features</h3>
                <ul className="feature-list">
                  <li>New shopping centers and retail precincts</li>
                  <li>Multiple schools and childcare facilities</li>
                  <li>Parks and recreational areas</li>
                  <li>Healthcare facilities including a new medical center</li>
                </ul>
              </div>
              
              <div className="overview-section">
                <h3>Demographics</h3>
                <div className="demographics-list">
                  <div className="demographic-item">
                    <span className="label">Population:</span>
                    <span className="value">12,500</span>
                  </div>
                  <div className="demographic-item">
                    <span className="label">Population Growth:</span>
                    <span className="value">4.2% per annum</span>
                  </div>
                  <div className="demographic-item">
                    <span className="label">Median Age:</span>
                    <span className="value">34 years</span>
                  </div>
                  <div className="demographic-item">
                    <span className="label">Families:</span>
                    <span className="value">68% of households</span>
                  </div>
                </div>
              </div>
              
              <div className="overview-section">
                <h3>Investment Pros</h3>
                <ul className="feature-list">
                  <li>Proximity to Western Sydney Airport</li>
                  <li>Strong infrastructure pipeline</li>
                  <li>Affordable entry point compared to inner Sydney</li>
                  <li>Family-friendly area with good amenities</li>
                </ul>
              </div>
              
              <div className="overview-section">
                <h3>Investment Cons</h3>
                <ul className="feature-list">
                  <li>Distance from Sydney CBD</li>
                  <li>Public transport limitations</li>
                  <li>Potential oversupply risk from new developments</li>
                </ul>
              </div>
            </div>
            
            <div className="charts-section">
              <div className="chart-container">
                <h3>Investment Potential <span className="data-source">Data: Combined Sources</span></h3>
                <div className="radar-chart-placeholder">
                  <canvas id="overviewInvestmentChart" width="400" height="300"></canvas>
                </div>
              </div>
              
              <div className="chart-container">
                <h3>Household Composition <span className="data-source">Data: ABS</span></h3>
                <div className="pie-chart-placeholder">
                  <canvas id="householdCompositionChart" width="400" height="300"></canvas>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'properties' && (
          <div className="properties-tab">
            <h2 className="section-title">Properties in {suburb.name}</h2>
            
            <div className="properties-controls">
              <div className="view-options">
                <button className="view-btn active"><i className="fa fa-th"></i> Grid</button>
                <button className="view-btn"><i className="fa fa-list"></i> List</button>
              </div>
              <div className="filter-options">
                <button className="sort-btn">Sort</button>
                <button className="filter-btn">Filter</button>
              </div>
            </div>
            
            <p className="properties-count">Showing 6 properties in {suburb.name}</p>
            
            <div className="properties-grid">
              {/* Property 1 */}
              <div className="property-card">
                <div className="property-image townhouse">
                  <span className="property-type townhouse">Townhouse</span>
                  <span className="property-price">$650,000</span>
                </div>
                <div className="property-details">
                  <h3>Contemporary Townhouse</h3>
                  <p className="property-address">
                    <FaMapMarkerAlt /> 7/15 Railway Parade, Leppington, NSW 2179
                  </p>
                  <div className="property-features">
                    <div className="feature">
                      <FaBed />
                      <span>3</span>
                      <p>Beds</p>
                    </div>
                    <div className="feature">
                      <FaBath />
                      <span>2.5</span>
                      <p>Baths</p>
                    </div>
                    <div className="feature">
                      <FaCar />
                      <span>1</span>
                      <p>Parking</p>
                    </div>
                    <div className="feature">
                      <FaRulerCombined />
                      <span>220m²</span>
                      <p>Area</p>
                    </div>
                  </div>
                  <div className="property-metrics">
                    <div className="metric rental-yield">
                      <span>3.5%</span>
                      <p>Rental Yield</p>
                    </div>
                    <div className="metric capital-growth">
                      <span>6.4%</span>
                      <p>Capital Growth</p>
                    </div>
                    <div className="metric cashflow">
                      <span>$35</span>
                      <p>Weekly Cashflow</p>
                    </div>
                  </div>
                  <div className="property-agent">
                    <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Agent" className="agent-photo" />
                    <span>Jessica Smith</span>
                    <span className="listing-date">Listed 28 Mar 2025</span>
                  </div>
                  <div className="property-actions">
                    <button className="view-details-btn">View Details</button>
                    <button className="save-property-btn" onClick={() => toggleSaveProperty(1)}>
                      {savedProperties.includes(1) ? <FaHeart /> : <FaRegHeart />}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Property 2 */}
              <div className="property-card">
                <div className="property-image apartment">
                  <span className="property-type apartment">Apartment</span>
                  <span className="property-price">$850,000</span>
                </div>
                <div className="property-details">
                  <h3>Modern Apartment with City Views</h3>
                  <p className="property-address">
                    <FaMapMarkerAlt /> 12/45 Church Street, Summer Hill, NSW 2130
                  </p>
                  <div className="property-features">
                    <div className="feature">
                      <FaBed />
                      <span>2</span>
                      <p>Beds</p>
                    </div>
                    <div className="feature">
                      <FaBath />
                      <span>2</span>
                      <p>Baths</p>
                    </div>
                    <div className="feature">
                      <FaCar />
                      <span>1</span>
                      <p>Parking</p>
                    </div>
                    <div className="feature">
                      <FaRulerCombined />
                      <span>110m²</span>
                      <p>Area</p>
                    </div>
                  </div>
                  <div className="property-metrics">
                    <div className="metric rental-yield">
                      <span>3%</span>
                      <p>Rental Yield</p>
                    </div>
                    <div className="metric capital-growth">
                      <span>5.2%</span>
                      <p>Capital Growth</p>
                    </div>
                    <div className="metric cashflow">
                      <span>$15</span>
                      <p>Weekly Cashflow</p>
                    </div>
                  </div>
                  <div className="property-agent">
                    <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Agent" className="agent-photo" />
                    <span>Robert Brown</span>
                    <span className="listing-date">Listed 5 Mar 2025</span>
                  </div>
                  <div className="property-actions">
                    <button className="view-details-btn">View Details</button>
                    <button className="save-property-btn" onClick={() => toggleSaveProperty(2)}>
                      {savedProperties.includes(2) ? <FaHeart /> : <FaRegHeart />}
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Property 3 */}
              <div className="property-card">
                <div className="property-image house">
                  <span className="property-type house">House</span>
                  <span className="property-price">$980,000</span>
                </div>
                <div className="property-details">
                  <h3>Modern Family Home</h3>
                  <p className="property-address">
                    <FaMapMarkerAlt /> 42 Parkview Drive, Gregory Hills, NSW 2557
                  </p>
                  <div className="property-features">
                    <div className="feature">
                      <FaBed />
                      <span>4</span>
                      <p>Beds</p>
                    </div>
                    <div className="feature">
                      <FaBath />
                      <span>2</span>
                      <p>Baths</p>
                    </div>
                    <div className="feature">
                      <FaCar />
                      <span>2</span>
                      <p>Parking</p>
                    </div>
                    <div className="feature">
                      <FaRulerCombined />
                      <span>450m²</span>
                      <p>Area</p>
                    </div>
                  </div>
                  <div className="property-metrics">
                    <div className="metric rental-yield">
                      <span>3.7%</span>
                      <p>Rental Yield</p>
                    </div>
                    <div className="metric capital-growth">
                      <span>7.2%</span>
                      <p>Capital Growth</p>
                    </div>
                    <div className="metric cashflow">
                      <span>$50</span>
                      <p>Weekly Cashflow</p>
                    </div>
                  </div>
                  <div className="property-agent">
                    <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Agent" className="agent-photo" />
                    <span>Sarah Johnson</span>
                    <span className="listing-date">Listed 15 Mar 2025</span>
                  </div>
                  <div className="property-actions">
                    <button className="view-details-btn">View Details</button>
                    <button className="save-property-btn" onClick={() => toggleSaveProperty(3)}>
                      {savedProperties.includes(3) ? <FaHeart /> : <FaRegHeart />}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'market' && (
          <div className="market-tab">
            <h2 className="section-title">Market Data</h2>
            
            <div className="market-grid">
              <div className="market-chart">
                <h3>Price History (10 Years) <span className="data-source">Data: CoreLogic</span></h3>
                <div className="chart-container">
                  <div className="chart-legend">
                    <div className="legend-item">
                      <span className="legend-color houses"></span>
                      <span className="legend-label">Houses</span>
                    </div>
                    <div className="legend-item">
                      <span className="legend-color units"></span>
                      <span className="legend-label">Units</span>
                    </div>
                  </div>
                  <canvas id="priceHistoryChart" width="400" height="250"></canvas>
                </div>
                <p className="chart-description">Historical median property prices showing trends over the past decade.</p>
              </div>
              
              <div className="market-chart">
                <h3>Rental Yield Trends <span className="data-source">Data: SQM Research</span></h3>
                <div className="chart-container">
                  <div className="chart-legend">
                    <div className="legend-item">
                      <span className="legend-color houses-bar"></span>
                      <span className="legend-label">Houses</span>
                    </div>
                    <div className="legend-item">
                      <span className="legend-color units-bar"></span>
                      <span className="legend-label">Units</span>
                    </div>
                  </div>
                  <canvas id="rentalYieldChart" width="400" height="250"></canvas>
                </div>
                <p className="chart-description">Comparison of rental yields across different property types over time.</p>
              </div>
              
              <div className="market-chart">
                <h3>Vacancy Rate Trends <span className="data-source">Data: SQM Research</span></h3>
                <div className="chart-container">
                  <div className="chart-legend">
                    <div className="legend-item">
                      <span className="legend-color houses-bar"></span>
                      <span className="legend-label">This Suburb</span>
                    </div>
                    <div className="legend-item">
                      <span className="legend-color units-bar"></span>
                      <span className="legend-label">Regional Average</span>
                    </div>
                  </div>
                  <canvas id="vacancyRateChart" width="400" height="250"></canvas>
                </div>
                <p className="chart-description">Monthly vacancy rates compared to regional averages.</p>
              </div>
              
              <div className="market-chart">
                <h3>Investment Metrics Comparison <span className="data-source">Data: Combined Sources</span></h3>
                <div className="chart-container">
                  <div className="chart-legend">
                    <div className="legend-item">
                      <span className="legend-color houses"></span>
                      <span className="legend-label">This Suburb</span>
                    </div>
                    <div className="legend-item">
                      <span className="legend-color units"></span>
                      <span className="legend-label">Regional Average</span>
                    </div>
                  </div>
                  <canvas id="investmentMetricsChart" width="400" height="300"></canvas>
                </div>
                <p className="chart-description">Comparison of key investment metrics against regional averages.</p>
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'map' && (
          <div className="map-tab">
            <h2 className="section-title">Map View</h2>
            
            <div className="map-container">
              <div className="map-placeholder">
                <div className="map-overlay">
                  <h3>Gregory Hills Property Map</h3>
                  <p>This map shows available properties in the area. Click on markers to view property details.</p>
                  <p>Use the layer controls to filter by property type.</p>
                </div>
                <div className="map-controls">
                  <div className="property-type-filter">
                    <label>
                      <input type="checkbox" checked readOnly /> Houses
                    </label>
                    <label>
                      <input type="checkbox" checked readOnly /> Apartments
                    </label>
                    <label>
                      <input type="checkbox" checked readOnly /> Townhouses
                    </label>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="location-insights">
              <h3>Location Insights</h3>
              <p>
                Gregory Hills is located in the South West region of NSW, approximately 45 kilometers from the Sydney CBD. 
                The suburb benefits from its strategic position near major transport corridors and the future Western Sydney Airport.
              </p>
              <p>
                The area features a mix of residential developments, with newer housing estates dominating the landscape. 
                Local amenities include shopping centers, schools, parks, and medical facilities, providing residents with 
                convenient access to essential services.
              </p>
              <p>
                Major infrastructure projects in the vicinity include road upgrades, new commercial precincts, and educational 
                facilities, which are expected to enhance the suburb's appeal and potentially drive property value growth in the coming years.
              </p>
            </div>
          </div>
        )}
      </div>
      
      <button className="close-btn" onClick={onClose}>×</button>
    </div>
  );
};

export default SuburbProfile;
