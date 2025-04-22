// Sample suburb data based on the original website
const suburbData = [
  {
    id: 1,
    name: "Gregory Hills",
    postcode: "2557",
    region: "South West",
    investmentPotential: 8.5,
    medianHousePrice: 980000,
    medianUnitPrice: 750000,
    grossRentalYield: 3.7,
    vacancyRate: 1.2,
    priceGrowth: {
      houses: [850000, 880000, 920000, 950000, 980000],
      units: [650000, 680000, 700000, 730000, 750000]
    },
    trending: true
  },
  {
    id: 2,
    name: "Leppington",
    postcode: "2179",
    region: "South West",
    investmentPotential: 8.2,
    medianHousePrice: 1100000,
    medianUnitPrice: 650000,
    grossRentalYield: 3.5,
    vacancyRate: 1.5,
    priceGrowth: {
      houses: [900000, 950000, 1000000, 1050000, 1100000],
      units: [550000, 580000, 600000, 630000, 650000]
    },
    trending: true
  },
  {
    id: 3,
    name: "Parramatta",
    postcode: "2150",
    region: "West",
    investmentPotential: 7.8,
    medianHousePrice: 1500000,
    medianUnitPrice: 650000,
    grossRentalYield: 3.2,
    vacancyRate: 2.1,
    priceGrowth: {
      houses: [1300000, 1350000, 1400000, 1450000, 1500000],
      units: [550000, 580000, 600000, 630000, 650000]
    },
    trending: false
  },
  {
    id: 4,
    name: "Blacktown",
    postcode: "2148",
    region: "Western Sydney",
    investmentPotential: 7.5,
    medianHousePrice: 850000,
    medianUnitPrice: 520000,
    grossRentalYield: 3.8,
    vacancyRate: 1.7,
    priceGrowth: {
      houses: [720000, 760000, 800000, 830000, 850000],
      units: [450000, 470000, 490000, 510000, 520000]
    },
    trending: true
  },
  {
    id: 5,
    name: "Liverpool",
    postcode: "2170",
    region: "South West",
    investmentPotential: 7.3,
    medianHousePrice: 920000,
    medianUnitPrice: 580000,
    grossRentalYield: 3.6,
    vacancyRate: 1.9,
    priceGrowth: {
      houses: [800000, 830000, 860000, 890000, 920000],
      units: [500000, 520000, 540000, 560000, 580000]
    },
    trending: false
  },
  {
    id: 6,
    name: "Penrith",
    postcode: "2750",
    region: "Western Sydney",
    investmentPotential: 7.2,
    medianHousePrice: 780000,
    medianUnitPrice: 490000,
    grossRentalYield: 3.9,
    vacancyRate: 1.6,
    priceGrowth: {
      houses: [680000, 710000, 740000, 760000, 780000],
      units: [420000, 440000, 460000, 480000, 490000]
    },
    trending: true
  }
];

export default suburbData;
