const propertyData = [
  {
    id: 1,
    title: "Contemporary Townhouse",
    price: 650000,
    address: "7/15 Railway Parade, Leppington, NSW 2179",
    imageUrl: "/images/property1.jpg",
    beds: 3,
    baths: 2.5,
    parking: 1,
    area: 220,
    description: "This stunning contemporary townhouse offers modern living in a highly sought-after location. Featuring an open plan design with high ceilings and abundant natural light, this property is perfect for both homeowners and investors. The gourmet kitchen includes stone countertops and premium appliances, while the outdoor entertaining area provides a perfect space for relaxation.",
    agent: {
      name: "Jessica Smith",
      company: "NSW Property Group",
      phone: "0412 345 678",
      photo: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    listedDate: "28 Mar 2025",
    rentalYield: 3.5,
    capitalGrowth: 6.4,
    weeklyCashflow: 35,
    weeklyRent: 550,
    annualExpenses: 8200,
    suburbAvgYield: 3.2,
    cityAvgYield: 2.8,
    features: [
      "Open plan living and dining",
      "Gourmet kitchen with stone countertops",
      "Private courtyard",
      "Ducted air conditioning",
      "Built-in wardrobes",
      "Security system",
      "Double glazed windows",
      "Engineered timber flooring",
      "LED lighting throughout",
      "NBN connection"
    ],
    images: [
      "/images/property1.jpg",
      "/images/property1-2.jpg",
      "/images/property1-3.jpg",
      "/images/property1-4.jpg",
      "/images/property1-5.jpg",
      "/images/property1-6.jpg"
    ],
    amenities: [
      {
        name: "Leppington Station",
        distance: "450m",
        icon: "🚆"
      },
      {
        name: "Leppington Shopping Centre",
        distance: "1.2km",
        icon: "🛒"
      },
      {
        name: "Leppington Public School",
        distance: "850m",
        icon: "🏫"
      },
      {
        name: "Leppington Medical Centre",
        distance: "1.5km",
        icon: "🏥"
      }
    ],
    suburbStats: {
      medianPrice: 1100000,
      annualGrowth: 5.8,
      rentalYield: 3.5,
      vacancyRate: 1.5
    }
  },
  {
    id: 2,
    title: "Modern Apartment with City Views",
    price: 850000,
    address: "12/45 Church Street, Summer Hill, NSW 2130",
    imageUrl: "/images/property2.jpg",
    beds: 2,
    baths: 2,
    parking: 1,
    area: 110,
    description: "Enjoy breathtaking city views from this modern apartment in the heart of Summer Hill. This stylish residence features floor-to-ceiling windows, premium finishes, and a functional layout perfect for contemporary living. The open-plan living area flows seamlessly to a private balcony, ideal for entertaining or relaxing while taking in the spectacular views.",
    agent: {
      name: "Robert Brown",
      company: "Sydney Real Estate",
      phone: "0423 456 789",
      photo: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    listedDate: "5 Mar 2025",
    rentalYield: 3.0,
    capitalGrowth: 5.2,
    weeklyCashflow: 15,
    weeklyRent: 490,
    annualExpenses: 10400,
    suburbAvgYield: 2.8,
    cityAvgYield: 2.8,
    features: [
      "Floor-to-ceiling windows",
      "Private balcony with city views",
      "Stone kitchen countertops",
      "European appliances",
      "Built-in wardrobes",
      "Secure parking",
      "Building security system",
      "Visitor parking",
      "Storage cage",
      "Pet-friendly building"
    ],
    images: [
      "/images/property2.jpg",
      "/images/property2-2.jpg",
      "/images/property2-3.jpg",
      "/images/property2-4.jpg",
      "/images/property2-5.jpg",
      "/images/property2-6.jpg"
    ],
    amenities: [
      {
        name: "Summer Hill Station",
        distance: "350m",
        icon: "🚆"
      },
      {
        name: "Summer Hill Village",
        distance: "500m",
        icon: "🛒"
      },
      {
        name: "Summer Hill Public School",
        distance: "750m",
        icon: "🏫"
      },
      {
        name: "Inner West Medical Centre",
        distance: "1.1km",
        icon: "🏥"
      }
    ],
    suburbStats: {
      medianPrice: 950000,
      annualGrowth: 4.9,
      rentalYield: 2.8,
      vacancyRate: 1.8
    }
  },
  {
    id: 3,
    title: "Modern Family Home",
    price: 980000,
    address: "42 Parkview Drive, Gregory Hills, NSW 2557",
    imageUrl: "/images/property3.jpg",
    beds: 4,
    baths: 2,
    parking: 2,
    area: 450,
    description: "This beautifully designed family home offers spacious living in the sought-after Gregory Hills area. Featuring four bedrooms, a gourmet kitchen, and a resort-style backyard with pool, this property provides the perfect balance of comfort and luxury. The open plan living areas flow seamlessly to the outdoor entertaining space, creating an ideal environment for family living and entertaining.",
    agent: {
      name: "Sarah Johnson",
      company: "Macarthur Real Estate",
      phone: "0434 567 890",
      photo: "https://randomuser.me/api/portraits/women/68.jpg"
    },
    listedDate: "15 Mar 2025",
    rentalYield: 3.7,
    capitalGrowth: 7.2,
    weeklyCashflow: 50,
    weeklyRent: 695,
    annualExpenses: 9360,
    suburbAvgYield: 3.5,
    cityAvgYield: 2.8,
    features: [
      "Open plan living areas",
      "Gourmet kitchen with island bench",
      "Resort-style pool",
      "Covered alfresco area",
      "Master suite with walk-in robe",
      "Ducted air conditioning",
      "Solar panels",
      "Double garage with internal access",
      "Landscaped gardens",
      "Security system"
    ],
    images: [
      "/images/property3.jpg",
      "/images/property3-2.jpg",
      "/images/property3-3.jpg",
      "/images/property3-4.jpg",
      "/images/property3-5.jpg",
      "/images/property3-6.jpg"
    ],
    amenities: [
      {
        name: "Gregory Hills Shopping Centre",
        distance: "1.5km",
        icon: "🛒"
      },
      {
        name: "St Gregory's College",
        distance: "2.1km",
        icon: "🏫"
      },
      {
        name: "Gregory Hills Medical Centre",
        distance: "1.8km",
        icon: "🏥"
      },
      {
        name: "Gregory Hills Sports Field",
        distance: "900m",
        icon: "⚽"
      }
    ],
    suburbStats: {
      medianPrice: 980000,
      annualGrowth: 7.2,
      rentalYield: 3.7,
      vacancyRate: 1.2
    }
  }
];

export default propertyData;
