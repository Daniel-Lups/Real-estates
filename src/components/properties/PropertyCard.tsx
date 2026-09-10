import React from 'react';
import { Property } from '../../types';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import { Badge } from '../ui/badge';
import { Bed, Bath, Square, Car, MapPin, Heart } from 'lucide-react';
import { Button } from '../ui/button';

interface PropertyCardProps {
  property: Property;
}

export function PropertyCard({ property }: PropertyCardProps) {
  const isSale = property.status === 'For Sale';
  
  // Format price nicely
  const formattedPrice = new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(property.price);

  return (
    <Card className="group overflow-hidden flex flex-col transition-all hover:shadow-lg">
      {/* Image container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={property.images[0]} 
          alt={property.title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute left-4 top-4 flex gap-2">
          <Badge variant={isSale ? "sale" : "rent"} className="px-3 py-1 uppercase tracking-wider text-[10px]">
            {property.status}
          </Badge>
          <Badge variant="secondary" className="bg-white/90 text-brand-900 px-3 py-1 shadow-sm backdrop-blur">
            {property.type}
          </Badge>
        </div>
        <button className="absolute right-4 top-4 rounded-full bg-white/90 p-2 text-gray-500 shadow-sm backdrop-blur transition-colors hover:text-red-500">
          <Heart className="h-5 w-5" />
        </button>
      </div>

      <CardHeader className="p-5 pb-0">
        <div className="mb-2 flex items-center text-sm text-gray-500">
          <MapPin className="mr-1 h-4 w-4 shrink-0" />
          <span className="truncate">{property.location}</span>
        </div>
        <h3 className="font-heading text-xl font-semibold leading-tight text-brand-900 line-clamp-1">
          {property.title}
        </h3>
        <div className="mt-2 text-xl font-bold text-brand-900">
          {formattedPrice} <span className="text-sm font-normal text-gray-500">{property.priceLabel}</span>
        </div>
      </CardHeader>

      <CardContent className="mt-auto p-5 pb-4">
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 border-t border-gray-100 pt-4">
          {property.bedrooms && (
            <div className="flex items-center gap-1.5 tooltip">
              <Bed className="h-4 w-4" /> <span>{property.bedrooms} Beds</span>
            </div>
          )}
          {property.bathrooms && (
            <div className="flex items-center gap-1.5">
              <Bath className="h-4 w-4" /> <span>{property.bathrooms} Baths</span>
            </div>
          )}
          {property.parking && (
            <div className="flex items-center gap-1.5">
              <Car className="h-4 w-4" /> <span>{property.parking} Parking</span>
            </div>
          )}
          {property.area && (
            <div className="flex items-center gap-1.5">
              <Square className="h-4 w-4" /> <span>{property.area} sqm</span>
            </div>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0">
        <Button asChild className="w-full" variant="outline">
          <Link to={`/property/${property.id}`}>View Property</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
