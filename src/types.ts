export type ListingType = 'For Sale' | 'For Rent';
export type PropertyCategory = 'Apartment' | 'House' | 'Duplex' | 'Land' | 'Office' | 'Shop' | 'Commercial';

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  priceLabel?: string; // e.g. "/ year"
  bedrooms?: number;
  bathrooms?: number;
  parking?: number;
  area?: number;
  type: PropertyCategory;
  status: ListingType;
  description: string;
  amenities: string[];
  images: string[];
  agentId: string;
  featured?: boolean;
}

export interface Agent {
  id: string;
  name: string;
  role: string;
  specialty: string;
  image: string;
  phone: string;
}

export interface Location {
  name: string;
  image: string;
  count: number;
}
