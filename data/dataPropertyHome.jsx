// data/dataPropertyHome.jsx

// Property Listings Array ************************************* API Owner provided data
export const propertyListings = [
  {
    id: 1,
    title: "Luxury 5-Bedroom House in the Hills",
    status: "Available",
    price: "1,200,000",
    pricePerSqFt: 250,
    rent: false,
    location: "Sanganer, Jaipur",
    landArea: 3500,
    imageUrl: [
      "https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    waterSupply: true,
    electricitySupply: true,
    longDescription: "This beautiful 5-bedroom house, located in the peaceful hills near Sanganer, Jaipur, offers 4 luxurious bathrooms, 2 large halls, and a modern kitchen equipped with the latest appliances. The home spans 3500 sq ft and boasts spacious balconies, perfect for enjoying the panoramic views. With a private parking space and a pool in the backyard, this house is ideal for families who desire privacy and luxury. The property also features two floors, ensuring ample space for living, and is equipped with water and electricity supply for your convenience.",
    category: "House",
    houseDetails: {
      bedrooms: 5,
      bathrooms: 4,
      halls: 2,
      kitchen: true,
      balconies: true,
      parking: true,
      floors: 2,
      lift: false
    }
  },
  {
    id: 2,
    title: "Modern 2-Bedroom Apartment",
    status: "Booked",
    price: "350,000",
    pricePerSqFt: 300,
    rent: false,
    location: "Bapu Nagar, Jaipur",
    landArea: 1200,
    imageUrl: [
      "https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    waterSupply: true,
    electricitySupply: true,
    longDescription: "Located in the heart of Bapu Nagar, Jaipur, this modern 2-bedroom apartment features a spacious living room, 2 sleek bathrooms, and a contemporary kitchen with top-of-the-line appliances. The apartment, located on the 4th floor of a 10-floor building, also includes a private balcony, perfect for enjoying city views. With a lift for easy access, parking, and reliable water and electricity supplies, this apartment is ideal for city dwellers looking for comfort and convenience.",
    category: "Apartment",
    apartmentDetails: {
      bathrooms: 2,
      bedrooms: 2,
      balconies: true,
      floorNumber: 4,
      totalFloors: 10,
      parking: true,
      lift: true
    }
  },
  {
    id: 3,
    title: "Commercial Office Space",
    status: "Available",
    price: "450,000",
    pricePerSqFt: 120,
    rent: false,
    location: "C-Scheme, Jaipur",
    landArea: 5000,
    imageUrl: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    waterSupply: true,
    electricitySupply: true,
    longDescription: "This spacious commercial office space, located in the busy commercial district of C-Scheme, Jaipur, offers a perfect setting for businesses. The 5000 sq ft space comes with ample parking, lift access, and is wheelchair accessible. The property also features reliable water and electricity supplies, making it convenient for businesses to operate smoothly. The office is ideal for startups or established companies looking for a modern and well-located workspace.",
    category: "Commercial Space",
    commercialSpaceDetails: {
      parking: true,
      lift: true,
      isWheelchairAccessible: true
    }
  },
  {
    id: 4,
    title: "Spacious Residential Plot",
    status: "Available",
    price: "700,000",
    pricePerSqFt: 50,
    rent: false,
    location: "Vaishali Nagar, Jaipur",
    landArea: 10000,
    imageUrl: [
      "https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    waterSupply: false,
    electricitySupply: false,
    longDescription: "This large 10,000 sq ft residential plot is located in a peaceful area of Vaishali Nagar, Jaipur, offering the perfect opportunity for those looking to build their dream home. While the plot does not currently have water or electricity supply, it is in close proximity to essential services. The land is ideal for those seeking a tranquil location while still being close to the city's amenities. The plot is a great investment for future development in one of the most sought-after locations in Jaipur.",
    category: "Plot",
    plotDetails: {
      plotType: "Residential"
    }
  },
  {
    id: 5,
    title: "Luxury Office Space",
    status: "Available",
    price: "1,500,000",
    pricePerSqFt: 200,
    rent: false,
    location: "Civil Lines, Jaipur",
    landArea: 2500,
    imageUrl: [
      "https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    waterSupply: true,
    electricitySupply: true,
    longDescription: "Located in the central business district of Civil Lines, Jaipur, this luxurious office space offers everything corporate clients need. The office includes multiple conference rooms, a meeting room, a waiting room, and a fully-equipped kitchenette. It spans 2500 sq ft and is easily accessible with a lift. Parking is available for employees and visitors, and the office is wheelchair accessible. With reliable water and electricity supply, this office is the perfect place for businesses looking to impress clients and employees alike.",
    category: "Office",
    officeDetails: {
      conferenceRoom: true,
      meetingRoom: true,
      waitingRoom: true,
      parking: true,
      lift: true,
      isWheelchairAccessible: true
    }
  },
  // Rent Properties
  {
    id: 6,
    title: "Charming 3-Bedroom House for Rent",
    status: "Available",
    pricePerSqFt: 250,
    rent: true,
    location: "Malviya Nagar, Jaipur",
    landArea: 2000,
    imageUrl: [
      "https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    waterSupply: true,
    electricitySupply: true,
    longDescription: "This charming 3-bedroom house for rent in Malviya Nagar, Jaipur offers a spacious living room, 2 modern bathrooms, and a fully equipped kitchen. The house also features a cozy backyard perfect for entertaining guests. With a single floor layout, this home is both practical and accessible, offering convenient parking and a balcony. The property is well-maintained and comes with a fixed lease duration of 12 months.",
    category: "House",
    houseDetails: {
      bedrooms: 3,
      bathrooms: 2,
      halls: 1,
      kitchen: true,
      balconies: true,
      parking: true,
      floors: 1,
      lift: false
    },
    monthlyRent: 3500,
    deposit: 7000,
    maintenanceCost: 200,
    leaseDuration: 12,
    leaseType: "Fixed"
  },
  {
    id: 7,
    title: "2-Bedroom Apartment for Rent",
    status: "Booked",
    pricePerSqFt: 300,
    rent: true,
    location: "Jagatpura, Jaipur",
    landArea: 900,
    imageUrl: [
      "https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    waterSupply: true,
    electricitySupply: true,
    longDescription: "This lovely 2-bedroom apartment for rent in Jagatpura, Jaipur features a spacious living room, a modern kitchen with sleek appliances, and a balcony offering stunning city views. Located on the 5th floor of a 7-story building, the apartment also includes 1 bathroom and is equipped with a lift. Though it does not have parking, the apartment is conveniently located near public transport and amenities. The lease is renewable for 6 months, making it a flexible option for renters.",
    category: "Apartment",
    apartmentDetails: {
      bathrooms: 1,
      balconies: true,
      floorNumber: 5,
      totalFloors: 7,
      parking: false,
      lift: true
    },
    monthlyRent: 2000,
    deposit: 4000,
    maintenanceCost: 150,
    leaseDuration: 6,
    leaseType: "Renewable"
  },
  {
    id: 8,
    title: "Luxury 1-Bedroom Condo for Rent",
    status: "Available",
    pricePerSqFt: 400,
    rent: true,
    location: "Bani Park, Jaipur",
    landArea: 800,
    imageUrl: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    waterSupply: true,
    electricitySupply: true,
    longDescription: "This luxurious 1-bedroom condo for rent in Bani Park, Jaipur features a modern kitchen with high-end appliances, a spacious living room, and breathtaking city views from the balcony. Located on the 12th floor of a 20-story building, this condo also includes 1 bathroom, parking, and lift access. The condo provides a fixed 12-month lease and is perfect for professionals or couples looking for a high-end living space in the city.",
    category: "Condo",
    condoDetails: {
      bathrooms: 1,
      balconies: true,
      floorNumber: 12,
      totalFloors: 20,
      parking: true,
      lift: true
    },
    monthlyRent: 2500,
    deposit: 5000,
    maintenanceCost: 100,
    leaseDuration: 12,
    leaseType: "Fixed"
  },
  {
    id: 9,
    title: "Commercial Office Space for Rent",
    status: "Available",
    pricePerSqFt: 200,
    rent: true,
    location: "M.I. Road, Jaipur",
    landArea: 3000,
    imageUrl: [
      "https://images.unsplash.com/photo-1504615755583-2916b52192a3?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    waterSupply: true,
    electricitySupply: true,
    longDescription: "This spacious commercial office space for rent in M.I. Road, Jaipur is perfect for startups or established businesses. With ample parking and lift access, this property also includes wheelchair accessibility. The 3000 sq ft space is designed for maximum utility, featuring multiple rooms that can be customized to suit your business needs. The office is available on a fixed 24-month lease with reliable water and electricity supply.",
    category: "Commercial Space",
    commercialSpaceDetails: {
      parking: true,
      lift: true,
      isWheelchairAccessible: true
    },
    monthlyRent: 5000,
    deposit: 10000,
    maintenanceCost: 500,
    leaseDuration: 24,
    leaseType: "Fixed"
  },
  {
    id: 10,
    title: "2-Bedroom Apartment for Rent",
    status: "Available",
    pricePerSqFt: 350,
    rent: true,
    location: "Sodala, Jaipur",
    landArea: 1000,
    imageUrl: [
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    ],
    waterSupply: true,
    electricitySupply: true,
    longDescription: "Located in Sodala Jaipur, this modern 2-bedroom apartment for rent features spacious rooms, 2 bathrooms, and a balcony with a fantastic view of the city. The apartment is on the 2nd floor of a 6-story building, and is equipped with a lift and parking space for added convenience. It offers a flexible 12-month renewable lease, making it an excellent option for city dwellers.",
    category: "Apartment",
    apartmentDetails: {
      bathrooms: 2,
      balconies: true,
      floorNumber: 2,
      totalFloors: 6,
      parking: true,
      lift: true
    },
    monthlyRent: 1800,
    deposit: 3600,
    maintenanceCost: 200,
    leaseDuration: 12,
    leaseType: "Renewable"
  }  
];
