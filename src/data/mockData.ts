import { Property, Agent, Location } from '../types';

export const agents: Agent[] = [
  {
    id: 'a1',
    name: 'David Ibrahim',
    role: 'Senior Property Consultant',
    specialty: 'Residential sales, rentals & investment properties',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800',
    phone: '+2348000000000',
  },
  {
    id: 'a2',
    name: 'Sarah Mohammed',
    role: 'Property Consultant',
    specialty: 'Apartments, family homes & rentals',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800',
    phone: '+2348000000000',
  },
  {
    id: 'a3',
    name: 'Michael Yusuf',
    role: 'Commercial Property Specialist',
    specialty: 'Commercial properties & investment opportunities',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800',
    phone: '+2348000000000',
  }
];

export const locations: Location[] = [
  { name: 'Bosso', count: 12, image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=800' },
  { name: 'Tunga', count: 18, image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=800' },
  { name: 'GRA', count: 8, image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800' },
  { name: 'Maitumbi', count: 5, image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800' },
  { name: 'Kpakungu', count: 7, image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800' },
  { name: 'Chanchaga', count: 4, image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800' },
  { name: 'Shiroro Road', count: 6, image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=800' },
  { name: 'Sauka Kahuta', count: 3, image: 'https://images.unsplash.com/photo-1510627489930-0c1b0bfb6785?auto=format&fit=crop&q=80&w=800' }
];

export const properties: Property[] = [
  {
    id: 'p1',
    title: 'Modern 3-Bedroom Apartment',
    location: 'Tunga, Minna',
    price: 1800000,
    priceLabel: '/ year',
    bedrooms: 3,
    bathrooms: 3,
    parking: 2,
    type: 'Apartment',
    status: 'For Rent',
    description: 'This modern three-bedroom apartment offers a comfortable living environment in a convenient part of Tunga, Minna. The property features spacious bedrooms, well-finished bathrooms, a functional kitchen and dedicated parking space. Enjoy natural lighting and a peaceful neighborhood.',
    amenities: ['Fitted Kitchen', 'Spacious Bedrooms', 'Secure Compound', 'Parking Space', 'Water Supply', 'Tiled Floors', 'Modern Bathrooms', 'Good Road Access'],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&q=80&w=1200'
    ],
    agentId: 'a1',
    featured: true
  },
  {
    id: 'p2',
    title: 'Luxury 4-Bedroom Duplex',
    location: 'GRA, Minna',
    price: 85000000,
    bedrooms: 4,
    bathrooms: 5,
    parking: 3,
    type: 'Duplex',
    status: 'For Sale',
    description: 'A spectacular luxury duplex located in the prestigious GRA neighborhood. It boasts a grand entrance, expansive living areas, high ceilings, a state-of-the-art kitchen, and beautifully appointed en-suite bedrooms. A perfect blend of comfort and elegance.',
    amenities: ['Fitted Kitchen', 'Spacious Bedrooms', 'Secure Compound', 'Parking Space', 'Water Supply', 'Tiled Floors', 'Modern Bathrooms', 'Good Road Access', 'CCTV', 'Boys Quarters'],
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80&w=1200'
    ],
    agentId: 'a2',
    featured: true
  },
  {
    id: 'p3',
    title: 'Serviced 2-Bedroom Apartment',
    location: 'Bosso, Minna',
    price: 2400000,
    priceLabel: '/ year',
    bedrooms: 2,
    bathrooms: 2,
    parking: 1,
    type: 'Apartment',
    status: 'For Rent',
    description: 'Beautifully finished and serviced 2-bedroom apartment situated in a serene environment in Bosso. It features modern architecture, 24/7 security, standby generator, and ample parking space.',
    amenities: ['Fitted Kitchen', 'Spacious Bedrooms', 'Secure Compound', 'Parking Space', 'Water Supply', 'Tiled Floors', 'Modern Bathrooms', 'Good Road Access', 'Standby Generator'],
    images: [
      'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=1200'
    ],
    agentId: 'a2',
    featured: true
  },
  {
    id: 'p4',
    title: 'Residential Land — 600sqm',
    location: 'Maitumbi, Minna',
    price: 12500000,
    area: 600,
    type: 'Land',
    status: 'For Sale',
    description: 'Prime residential land measuring 600 square meters in a rapidly developing area of Maitumbi. Excellent road network and suitable for immediate development or long-term investment.',
    amenities: ['Good Road Access', 'Developing Area', 'Survey Plan Available', 'Deed of Assignment'],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200'
    ],
    agentId: 'a1',
    featured: true
  },
  {
    id: 'p5',
    title: 'Contemporary 5-Bedroom Family Home',
    location: 'Shiroro Road, Minna',
    price: 65000000,
    bedrooms: 5,
    bathrooms: 5,
    parking: 4,
    type: 'House',
    status: 'For Sale',
    description: 'This gorgeous contemporary 5-bedroom house is the ideal family home. It offers a large living room, dining area, family lounge, well-ventilated rooms, and a sizable compound with green areas.',
    amenities: ['Fitted Kitchen', 'Spacious Bedrooms', 'Secure Compound', 'Parking Space', 'Water Supply', 'Tiled Floors', 'Modern Bathrooms', 'Good Road Access', 'Garden'],
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=1200'
    ],
    agentId: 'a2',
    featured: true
  },
  {
    id: 'p6',
    title: 'Modern Commercial Space',
    location: 'Kpakungu, Minna',
    price: 3500000,
    priceLabel: '/ year',
    area: 250,
    type: 'Commercial',
    status: 'For Rent',
    description: 'A versatile and modern commercial space suitable for a corporate office, showroom, or retail outlet. Located on a major road in Kpakungu ensuring high visibility and easy accessibility.',
    amenities: ['Spacious Layout', 'High Visibility', 'Parking Space', 'Water Supply', 'Tiled Floors', 'Good Road Access', 'Dedicated Transformer'],
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200'
    ],
    agentId: 'a3',
    featured: true
  },
  {
    id: 'p7',
    title: 'Cozy 1-Bedroom Apartment',
    location: 'Bosso, Minna',
    price: 900000,
    priceLabel: '/ year',
    bedrooms: 1,
    bathrooms: 1,
    parking: 1,
    type: 'Apartment',
    status: 'For Rent',
    description: 'A cozy and well-maintained 1-bedroom apartment perfect for singles or young couples. Located near the university campus with excellent transport links.',
    amenities: ['Kitchen Cabinets', 'Wardrobes', 'Secure Compound', 'Parking Space', 'Water Supply', 'Tiled Floors', 'Modern Bathrooms', 'Good Road Access'],
    images: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&q=80&w=1200'
    ],
    agentId: 'a1',
    featured: false
  },
  {
    id: 'p8',
    title: 'Standard Office Complex',
    location: 'Tunga, Minna',
    price: 15000000,
    priceLabel: '/ year',
    area: 1200,
    type: 'Office',
    status: 'For Rent',
    description: 'A large standard office complex featuring multiple private offices, a boardroom, reception area, and ample parking. Ideal for large organizations or bank branches.',
    amenities: ['Spacious Layout', 'High Visibility', 'Parking Space', 'Water Supply', 'Tiled Floors', 'Good Road Access', 'Security Post', 'Central AC'],
    images: [
      'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=1200'
    ],
    agentId: 'a3',
    featured: false
  }
];
